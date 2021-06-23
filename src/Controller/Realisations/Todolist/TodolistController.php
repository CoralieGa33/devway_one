<?php

namespace App\Controller\Realisations\Todolist;

use App\Entity\TodolistTask;
use App\Form\TodolistTaskType;
use App\Form\TodolistEditTaskType;
use App\Repository\TodolistTaskRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/back/mes-realisations/todolist")
 */
class TodolistController extends AbstractController
{
    /**
     * @Route("/", name="todolist_index", methods={"GET"})
     */
    public function index(TodolistTaskRepository $todolistTaskRepository): Response
    {
        return $this->render('back/mes_realisations/todolist/index.html.twig', [
            'todolist_tasks' => $todolistTaskRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="todolist_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $todolistTask = new TodolistTask();
        $form = $this->createForm(TodolistTaskType::class, $todolistTask);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($todolistTask);
            $entityManager->flush();

            return $this->redirectToRoute('todolist_index');
        }

        return $this->render('back/mes_realisations/todolist/new.html.twig', [
            'todolist_task' => $todolistTask,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="todolist_show", methods={"GET"})
     */
    public function show(TodolistTask $todolistTask): Response
    {
        return $this->render('back/mes_realisations/todolist/show.html.twig', [
            'todolist_task' => $todolistTask,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="todolist_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, TodolistTask $todolistTask): Response
    {
        $form = $this->createForm(TodolistEditTaskType::class, $todolistTask);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $todolistTask->setUpdatedAt(new \DateTime());
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('todolist_index');
        }

        return $this->render('back/mes_realisations/todolist/edit.html.twig', [
            'todolist_task' => $todolistTask,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="todolist_delete", methods={"POST"})
     */
    public function delete(Request $request, TodolistTask $todolistTask): Response
    {
        if ($this->isCsrfTokenValid('delete'.$todolistTask->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($todolistTask);
            $entityManager->flush();
        }

        return $this->redirectToRoute('todolist_index');
    }
}
