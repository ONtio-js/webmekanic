import React, { useEffect } from "react";
const number = 1
const GoogleTranslate = () => {
    
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, [number]);

  return (
		<div className=' fixed bottom-2 right-2 p-3 bg-primary text-white  rounded-md'>
			<div
				id='google_translate_element'
				className='flex  z-50 items-center justify-center'
			></div>
		</div>
  );

}
  export default GoogleTranslate;
