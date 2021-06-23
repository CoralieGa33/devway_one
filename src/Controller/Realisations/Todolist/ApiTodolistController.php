<?php

namespace App\Controller\Realisations\Todolist;

use App\Entity\TodolistTask;
use App\Repository\TodolistTaskRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/todolist")
 */
class ApiTodolistController extends AbstractController
{
    /**
     * @Route("/", name="api_todolist")
     */
    public function getTodolistTasks(TodolistTaskRepository $todolistTaskRepository): Response
    {
        $todolistTasks = $todolistTaskRepository->findby([], ['done' => 'ASC', 'favorite' => 'DESC']);

        $response = $this->json($todolistTasks);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/add", name="api_todolist_add")
     */
    public function addTodolistTask(Request $request): Response
    {
        $name = $request->getContent();

        $newTodolistTask = new TodolistTask();
        $newTodolistTask->setName($name);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($newTodolistTask);
        $entityManager->flush();
        
        return $this->redirectToRoute('api_todolist');  
    }

    /**
     * @Route("/update/{id<\d+>}", name="todolist_update", methods={"PUT"})
     */
    public function update($id, Request $request, TodolistTaskRepository $todolistTaskRepository, TodolistTask $todolistTask): Response
    {
        $data = $request->toArray();

        $todolistTask = $todolistTaskRepository->findOneById($id);
        $todolistTask->setDone($data['done']);
        $todolistTask->setFavorite($data['favorite']);
        $todolistTask->setUpdatedAt(new \DateTime());

        $this->getDoctrine()->getManager()->flush();

        return $this->redirectToRoute('api_todolist');  
    }

    /**
     * @Route("/delete/{id<\d+>}", name="api_todolist_delete", methods={"DELETE"})
     */
    public function deleteTodolistTask($id, TodolistTaskRepository $todolistTaskRepository): Response
    {
        $task = $todolistTaskRepository->findOneById($id);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($task);
        $entityManager->flush();
        
        
        return $this->redirectToRoute('api_todolist');  
    }
}
