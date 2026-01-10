import React from 'react';
import { Package, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a CRZ</h1>
          <p className="text-xl text-gray-600">
            Acessórios de tecnologia que conectam você ao que importa
          </p>
        </div>

        {/* Story */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A CRZ nasceu de uma necessidade simples: encontrar acessórios de tecnologia que 
            realmente funcionam. Cansados de produtos que prometem muito e entregam pouco, 
            decidimos criar uma marca que valoriza o essencial.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cada produto em nosso catálogo é cuidadosamente selecionado e testado. Não vendemos 
            apenas cabos e carregadores — oferecemos soluções que tornam seu dia a dia mais prático 
            e eficiente.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nossa filosofia é clara: qualidade real, preços honestos e um atendimento que coloca 
            você em primeiro lugar. Sem complicações, sem promessas vazias. Apenas produtos que 
            funcionam como deveriam.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 bg-gray-50">
            <CardContent className="pt-8 pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#6B7280] rounded-lg">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualidade Testada</h3>
              <p className="text-gray-600">
                Cada produto passa por rigorosos testes antes de chegar até você.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gray-50">
            <CardContent className="pt-8 pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#0066FF] rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Foco no Essencial</h3>
              <p className="text-gray-600">
                Oferecemos apenas o que realmente importa: desempenho e durabilidade.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-gray-50">
            <CardContent className="pt-8 pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#0066FF] rounded-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Atendimento Próximo</h3>
              <p className="text-gray-600">
                Estamos sempre disponíveis para ajudar via WhatsApp com rapidez.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Commitment */}
        <div className="bg-[#0B0B0B] text-white p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Nosso Compromisso</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Entregar produtos de alta qualidade com preços justos, garantia confiável e 
            um atendimento que respeita seu tempo. Simples assim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;