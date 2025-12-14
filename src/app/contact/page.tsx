{
  /* 3. GOOGLE MAP EMBED (Official Fixed Code) */
}
<section className="w-full h-[500px] bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
  <iframe
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    // 👇 UPDATED: This is the correct official URL format
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAYQTIj4uuIUZ0F5e5Wei2Mtwgj5txp4Q4&q=place_id:PASTE_YOUR_PLACE_ID_HERE`}
    title="Legal Wisdom Hub Map"
  ></iframe>

  {/* Map Overlay Label */}
  <div className="absolute top-10 left-10 bg-white p-4 shadow-lg border-l-4 border-gold-500 max-w-xs hidden md:block z-10">
    <p className="font-bold text-richBlack text-lg">Legal Wisdom Hub</p>
    <p className="text-sm text-gray-500">District Judicial Complex</p>
    <div className="flex items-center gap-2 mt-2">
      <span className="text-gold-500 font-bold text-sm">★ 4.9</span>
      <span className="text-gray-400 text-xs">(1.1K+ Views)</span>
    </div>
  </div>
</section>;
