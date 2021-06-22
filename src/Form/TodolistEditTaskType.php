<?php

namespace App\Form;

use App\Entity\TodolistTask;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class TodolistEditTaskType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'empty_data' => '',
                'label' => 'Nom : '
            ])
            ->add('done', CheckboxType::class, [
                'label'    => 'Faite',
            ])
            ->add('favorite', CheckboxType::class, [
                'label'    => 'Favorite',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => TodolistTask::class,
            'attr' => [
                'novalidate' => 'novalidate',
            ]
        ]);
    }
}