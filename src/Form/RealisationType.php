<?php

namespace App\Form;

use App\Entity\Realisation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class RealisationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'empty_data' => '',
                'label' => 'Titre* : '
            ])
            ->add('description', TextareaType::class, [
                'empty_data' => '',
                'label' => 'Description* : ',
                'attr' => [
                    'rows' => '3',
                ]
            ])
            ->add('techno', TextType::class, [
                'label' => 'Technos utilisées : '
            ])
            ->add('image', TextType::class, [
                'label' => 'Image : '
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Realisation::class,
            'attr' => [
                'novalidate' => 'novalidate',
            ]
        ]);
    }
}
