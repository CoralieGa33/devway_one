<?php

namespace App\Controller;

use App\Repository\MakeAListEntryRepository;
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

    /**
     * @Route("/make-a-list", name="api_make_a_list")
     */
    public function getMakeAListEntries(MakeAListEntryRepository $makeAListEntryRepository): Response
    {
        $makeAListEntries = $makeAListEntryRepository->findAll();

        $response = $this->json($makeAListEntries);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}