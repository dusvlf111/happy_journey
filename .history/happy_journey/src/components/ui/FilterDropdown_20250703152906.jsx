// 필터 드롭다운 컴포넌트입니다. 옵션 목록을 드롭다운으로 보여주고 선택할 수 있습니다.
import React from "react";

export default function FilterDropdown({ options, value, onChange, label }) {
  return (
    <div style={{marginBottom:12}}>
      {label && <label style={{marginRight:8}}>{label}</label>}
      <select value={value} onChange={e => onChange(e.target.value)} style={{padding:6, borderRadius:4, border:'1px solid #d1d5db'}}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
