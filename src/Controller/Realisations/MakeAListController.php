<?php

namespace App\Controller\Realisations;

use App\Entity\MakeAListEntry;
use App\Form\MakeAListEntryType;
use App\Repository\MakeAListEntryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/back/mes-realisations/make-a-list")
 */
class MakeAListController extends AbstractController
{
    /**
     * @Route("/", name="make_a_list_index", methods={"GET"})
     */
    public function index(MakeAListEntryRepository $makeAListEntryRepository): Response
    {
        return $this->render('back/mes_realisations/make_a_list/index.html.twig', [
            'make_a_list_entries' => $makeAListEntryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="make_a_list_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $makeAListEntry = new MakeAListEntry();
        $form = $this->createForm(MakeAListEntryType::class, $makeAListEntry);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($makeAListEntry);
            $entityManager->flush();

            return $this->redirectToRoute('make_a_list_index');
        }

        return $this->render('back/mes_realisations/make_a_list/new.html.twig', [
            'make_a_list_entry' => $makeAListEntry,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/clean", name="make_a_list_clean", methods={"GET","POST"})
     */
    public function clean(MakeAListEntryRepository $makeAListEntryRepository): Response
    {
        $makeAListEntryRepository->deleteEntries();
        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute('make_a_list_index');
    }

    /**
     * @Route("/{id}", name="make_a_list_show", methods={"GET"})
     */
    public function show(MakeAListEntry $makeAListEntry): Response
    {
        return $this->render('back/mes_realisations/make_a_list/show.html.twig', [
            'make_a_list_entry' => $makeAListEntry,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="make_a_list_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, MakeAListEntry $makeAListEntry): Response
    {
        $form = $this->createForm(MakeAListEntryType::class, $makeAListEntry);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $makeAListEntry->setUpdatedAt(new \DateTime());
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('make_a_list_index');
        }

        return $this->render('back/mes_realisations/make_a_list/edit.html.twig', [
            'make_a_list_entry' => $makeAListEntry,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="make_a_list_delete", methods={"POST"})
     */
    public function delete(Request $request, MakeAListEntry $makeAListEntry): Response
    {
        if ($this->isCsrfTokenValid('delete'.$makeAListEntry->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($makeAListEntry);
            $entityManager->flush();
        }

        return $this->redirectToRoute('make_a_list_index');
    }
}
