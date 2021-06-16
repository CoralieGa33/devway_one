<?php

namespace App\Form;

use App\Entity\Realisation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class RealisationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre* : '
            ])
            ->add('description', TextType::class, [
                'label' => 'Description* : '
            ])
            ->add('techno', TextType::class, [
                'label' => 'Technos utilisées : '
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
