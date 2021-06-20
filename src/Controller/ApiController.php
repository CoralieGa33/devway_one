<?php

namespace App\Controller;

use App\Entity\MakeAListEntry;
use App\Repository\RealisationRepository;
use App\Repository\MakeAListEntryRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
