import React from 'react';

const MyImageComponent = () => {
  const imageUrl = 'https://www.treehugger.com/thmb/_VGTqMSeZ-u2n3JRXwqQo26IA9g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-527961035-8179ca5f9b214d92977a1e788332c473.jpg';

  return (
    <div>
      <h2>Image from Google</h2>
      <img src={imageUrl} alt="Google Image" />
    </div>
  );
};

export default MyImageComponent;
