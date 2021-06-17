<?php

namespace App\Controller;

use App\Repository\RealisationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ApiController extends AbstractController
{
    /**
     * @Route("/realisations", name="api_realisations")
     */
    public function getRealisations(RealisationRepository $realisationRepository): Response
    {
        $realisations = $realisationRepository->findAll();

        $response = $this->json($realisations);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}