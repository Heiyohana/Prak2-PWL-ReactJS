import React from 'react';

import './education.css';

const education = () => {
  return <table className='table'>
      <thead>
          <tr>
              <th>Tahun</th>
              <th>Jurusan</th>
              <th>Tingkat</th>
          </tr>
      </thead>

      <tbody>
          <tr>
              <td>2016 - 2019</td>
              <td>IPA</td>
              <td>SMA Ananda Bekasi</td>
          </tr>

          <tr>
              <td>2019 - sekarang</td>
              <td>Teknik Informatika</td>
              <td>Institut Teknologi Sumatera</td>
          </tr>
      </tbody>
  </table>
}

export default education;