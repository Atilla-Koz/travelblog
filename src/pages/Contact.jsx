import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/Forms/ContactForm';

const Contact = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">İletişim</h1>
          <p className="text-lg text-gray-600">
            Bizimle iletişime geçmek için aşağıdaki formu doldurun.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <ContactForm />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
            <p className="text-gray-600">İstanbul, Türkiye</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
            <p className="text-gray-600">info@travelblog.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
            <p className="text-gray-600">+90 (212) 123 45 67</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact; 