<?php

namespace App\Controller\Realisations\MakeAList;

use App\Entity\MakeAListEntry;
use App\Repository\MakeAListEntryRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/make-a-list")
 */
class ApiMakeAListController extends AbstractController
{
    /**
     * @Route("/", name="api_make_a_list")
     */
    public function getMakeAListEntries(MakeAListEntryRepository $makeAListEntryRepository): Response
    {
        $makeAListEntries = $makeAListEntryRepository->findAll();

        $response = $this->json($makeAListEntries);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
    
    /**
     * @Route("/add", name="api_make_a_list_add")
     */
    public function addMakeAListEntry(Request $request): Response
    {
        $name = $request->getContent();

        $newMakeAListEntry = new MakeAListEntry();
        $newMakeAListEntry->setName($name);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($newMakeAListEntry);
        $entityManager->flush();
        
        return $this->redirectToRoute('api_make_a_list');  
    }

    /**
     * @Route("/delete/{id<\d+>}", name="api_make_a_list_delete", methods={"DELETE"})
     */
    public function deleteMakeAListEntry($id, MakeAListEntryRepository $makeAListEntryRepository): Response
    {
        $element = $makeAListEntryRepository->findOneById($id);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($element);
        $entityManager->flush();
        
        
        return $this->redirectToRoute('api_make_a_list');  
    }

    /**
     * @Route("/clean", name="api_make_a_list_clean", methods={"DELETE"})
     */
    public function cleanList(MakeAListEntryRepository $makeAListEntryRepository): Response
    {
        $makeAListEntryRepository->deleteEntries();
        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute('api_make_a_list');
    }
}