export default function HydraulicPartsService() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-extrabold text-red-700 mb-8">
        Hydraulic Parts & Service
      </h1>

      <p className="mb-8 text-lg leading-relaxed max-w-4xl">
        FluidTech Hydraulics now offers a full line of hydraulic components, in addition to our hydraulic service business.  
        Let us help you with your pump, valve, motor, or cylinder. We also offer cylinder repairs. Call or bring us your cylinder and we'll give you a quote.  
        As always, we appreciate the opportunity to earn your business.
      </p>

      {/* Pumps and Motors */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Pumps / Motors</h2>
        <ul className="list-disc list-inside space-y-2 max-w-3xl text-gray-700">
          <li><strong>Gear Pumps & Motors:</strong> Wide range of Aluminium and cast iron housing Pumps and motors.</li>
          <li><strong>Piston Pumps & Motors:</strong> For truck mounted cranes, industrial and Marine applications.</li>
          <li><strong>Vane Pumps & Motors</strong></li>
          <li><strong>Dump Pumps:</strong> PTO Pumps</li>
        </ul>
      </section>

      {/* Cylinders */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Cylinders: Design, Manufacturing and Service</h2>
        <p className="mb-4 max-w-3xl text-gray-700">
          We are fully equipped with design and manufacturing capabilities for all types of the cylinders listed below.  
          Our manufactured cylinders have been in service with leading companies for more than 2 years without any leaks or issues.
        </p>
        <ul className="list-disc list-inside space-y-2 max-w-3xl text-gray-700">
          <li>Tie-Rod Welded</li>
          <li>Single/Double Acting</li>
          <li>Telescopic Cylinders</li>
        </ul>
      </section>

      {/* Accessories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Accessories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">Rams</h3>
            <p>Hydraulic & Pneumatic cylinders</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Fittings / Adapters</h3>
            <ul className="list-disc list-inside">
              <li>Steel/Brass/Al/SS</li>
              <li>JIC</li>
              <li>SAE O-Ring Boss</li>
              <li>Flat Face (O-Ring)</li>
              <li>Metric</li>
              <li>BSP</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Valves</h3>
            <ul className="list-disc list-inside">
              <li>Spool Valves (Direction controls)</li>
              <li>Ball Valves (2/2 way, 3 way, 4 way valves)</li>
              <li>Check valves all sizes (¼ to 1”)</li>
              <li>Cartridge type valves</li>
              <li>Solenoid controlled valves</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Filters</h2>
        <p className="text-gray-700 mb-6">We offer a range of filtration models suitable for various flow rates and pressure requirements.</p>

        {/* Example filter table - simplified */}
        <table className="w-full text-left border-collapse border border-gray-300 mb-4">
          <thead className="bg-red-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Model</th>
              <th className="border border-gray-300 px-3 py-2">Q NOM (LPM)</th>
              <th className="border border-gray-300 px-3 py-2">P MAX (BAR)</th>
              <th className="border border-gray-300 px-3 py-2">Filtration Micron</th>
              <th className="border border-gray-300 px-3 py-2">Port Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2">IFR2 - 06</td>
              <td className="border border-gray-300 px-3 py-2">80</td>
              <td className="border border-gray-300 px-3 py-2">10</td>
              <td className="border border-gray-300 px-3 py-2">3/4 in</td>
              <td className="border border-gray-300 px-3 py-2">—</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">IFR2 - 10</td>
              <td className="border border-gray-300 px-3 py-2">150</td>
              <td className="border border-gray-300 px-3 py-2">25</td>
              <td className="border border-gray-300 px-3 py-2">1 - 1/4 in</td>
              <td className="border border-gray-300 px-3 py-2">—</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        <p className="italic text-gray-500 text-sm">
          * Please contact us for the full detailed filter catalog.
        </p>
      </section>

      {/* Hydraulic Power Units */}
      <section className="mb-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Hydraulic Power Units</h2>
        <p className="text-gray-700">
          Our engineers are fully capable to design power packs tailored to your requirements and standards.  
          Our powerpacks are highly efficient and require less maintenance in marine and industrial applications.  
          We build Diesel driven, Electric driven, and Air operated Powerpacks.  
          We stock DC motor operated powerpacks for Tailgate, Lowbed, and towing truck applications.
        </p>
      </section>

      {/* Pneumatic parts */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Pneumatic Parts</h2>
        <p className="text-gray-700 mb-4">
          Please visit the following site for pneumatic accessories:  
          <a
            href="https://www.janatics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 underline hover:text-red-800"
          >
            Janatics - Accessories, Air Cylinders, Air Preparation and Valves
          </a>
        </p>
        <p className="text-gray-700">
          Janatics is a leading manufacturer of pneumatic products in India with over 25 years of service and global exports.
        </p>
      </section>
    </section>
  );
}
