<?php

namespace App\Repository;

use App\Entity\RealisationsList;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RealisationsList|null find($id, $lockMode = null, $lockVersion = null)
 * @method RealisationsList|null findOneBy(array $criteria, array $orderBy = null)
 * @method RealisationsList[]    findAll()
 * @method RealisationsList[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RealisationsListRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RealisationsList::class);
    }

    // /**
    //  * @return RealisationsList[] Returns an array of RealisationsList objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RealisationsList
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
