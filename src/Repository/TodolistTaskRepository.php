<?php

namespace App\Repository;

use App\Entity\TodolistTask;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TodolistTask|null find($id, $lockMode = null, $lockVersion = null)
 * @method TodolistTask|null findOneBy(array $criteria, array $orderBy = null)
 * @method TodolistTask[]    findAll()
 * @method TodolistTask[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TodolistTaskRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TodolistTask::class);
    }

    // /**
    //  * @return TodolistTask[] Returns an array of TodolistTask objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TodolistTask
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
