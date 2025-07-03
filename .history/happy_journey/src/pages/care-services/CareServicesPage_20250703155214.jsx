// 케어서비스 목록 페이지 (src/pages/care-services/CareServicesPage.jsx)
import React from 'react';
import careServices from '../../services/mockData/careServices';
import CareServiceCard from '../../components/ui/CareServiceCard';

export default function CareServicesPage() {
  return (
    <div>
      <h1 className="title mb-4">케어 서비스 목록</h1>
      <div style={{display:'flex', flexWrap:'wrap', gap:'2em'}}>
        {careServices.map(service => (
          <CareServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
