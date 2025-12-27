'use client';

import { useEffect, useRef } from 'react';

interface JetsetFormProps {
  className?: string;
}

export default function JetsetForm({ className = '' }: JetsetFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization
    if (scriptLoadedRef.current || !containerRef.current) return;

    const container = containerRef.current;
    
    // Check if this container already has the form div
    const existingDiv = container.querySelector('#zf_div_YjfnRs8jwMY610O7BhZTLeQLpkp3piuOr36jyUwhnZM');
    if (existingDiv && existingDiv.querySelector('iframe')) {
      scriptLoadedRef.current = true;
      return;
    }

    // Handle iframe height auto-resize - Zoho's native resize logic
    const handleMessage = (event: MessageEvent) => {
      const evntData = event.data;
      
      if (evntData && typeof evntData === 'string') {
        const zf_ifrm_data = evntData.split('|');
        if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
          const zf_perma = zf_ifrm_data[0];
          const heightValue = parseInt(zf_ifrm_data[1], 10);
          const zf_ifrm_ht_nw = (heightValue + 15) + 'px';
          
          // Find the iframe directly
          const formDiv = document.getElementById('zf_div_YjfnRs8jwMY610O7BhZTLeQLpkp3piuOr36jyUwhnZM');
          const iframe = formDiv?.querySelector('iframe');
          
          if (iframe && iframe.src.indexOf('formperma') > 0 && iframe.src.indexOf(zf_perma) > 0) {
            // Update iframe height immediately
            iframe.style.height = zf_ifrm_ht_nw;
            
            // Scroll into view if it's a field focus event
            if (zf_ifrm_data.length == 3) {
              iframe.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);

    try {
      // Create the form container div - Zoho's native structure
      const formDiv = document.createElement('div');
      formDiv.id = 'zf_div_YjfnRs8jwMY610O7BhZTLeQLpkp3piuOr36jyUwhnZM';
      container.appendChild(formDiv);

      // Create iframe
      const f = document.createElement('iframe');
      let ifrmSrc = 'https://forms.jetsetbc.com/improvemeinstitute/form/JetsetBusinessCenterContactUsform/formperma/YjfnRs8jwMY610O7BhZTLeQLpkp3piuOr36jyUwhnZM?zf_rszfm=1';

      // Handle UTM parameters
      try {
        if (typeof (window as any).ZFAdvLead !== 'undefined' && typeof (window as any).zfutm_zfAdvLead !== 'undefined') {
          const ZFAdvLead = (window as any).ZFAdvLead;
          const zfutm_zfAdvLead = (window as any).zfutm_zfAdvLead;
          
          for (let prmIdx = 0; prmIdx < ZFAdvLead.utmPNameArr.length; prmIdx++) {
            const utmPm = ZFAdvLead.utmPNameArr[prmIdx];
            const adjustedUtmPm = (ZFAdvLead.isSameDomian && (ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1)) 
              ? 'zf_' + utmPm 
              : utmPm;
            const utmVal = zfutm_zfAdvLead.zfautm_gC_enc(ZFAdvLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== 'undefined' && utmVal != '') {
              if (ifrmSrc.indexOf('?') > 0) {
                ifrmSrc = ifrmSrc + '&' + adjustedUtmPm + '=' + utmVal;
              } else {
                ifrmSrc = ifrmSrc + '?' + adjustedUtmPm + '=' + utmVal;
              }
            }
          }
        }
        
        if (typeof (window as any).ZFLead !== 'undefined' && typeof (window as any).zfutm_zfLead !== 'undefined') {
          const ZFLead = (window as any).ZFLead;
          const zfutm_zfLead = (window as any).zfutm_zfLead;
          
          for (let prmIdx = 0; prmIdx < ZFLead.utmPNameArr.length; prmIdx++) {
            const utmPm = ZFLead.utmPNameArr[prmIdx];
            const utmVal = zfutm_zfLead.zfutm_gC_enc(ZFLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== 'undefined' && utmVal != '') {
              if (ifrmSrc.indexOf('?') > 0) {
                ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal;
              } else {
                ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal;
              }
            }
          }
        }
      } catch (e) {
        // UTM parameter handling failed, continue with default URL
      }

      // Set iframe properties - raw Zoho embed logic
      f.src = ifrmSrc;
      f.scrolling = 'no';
      f.style.border = 'none';
      f.style.height = '1200px'; // Higher initial height to prevent cutoff
      f.style.width = '100%'; // Full width to fill card
      f.style.display = 'block';
      f.style.margin = '0';
      f.style.padding = '0';
      f.style.overflow = 'hidden';
      f.setAttribute('scrolling', 'no');
      f.setAttribute('aria-label', 'Jetset Business Centre Enquiry Form');
      f.setAttribute('title', 'Jetset Business Centre Enquiry Form');

      formDiv.appendChild(f);
      scriptLoadedRef.current = true;
    } catch (e) {
      console.error('Error initializing Jetset form:', e);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Minimal wrapper - just a ref container, no extra divs
  // The formDiv with id="zf_div_..." will be created and appended in useEffect
  return (
    <div 
      ref={containerRef}
      className={className}
      style={{ width: '100%', display: 'block' }}
    />
  );
}

