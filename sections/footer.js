document.getElementById('footer-mount').innerHTML = `
<footer style="
  background:#01412C;
  color:#ffffff;
  font-family:'Segoe UI',sans-serif;
">

  <!-- Container -->
  <div style="
    max-width:1380px;
    margin:0 auto;
    padding:28px 55px 0;
  ">

    <!-- Navbar -->
    <div style="
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:40px;
      flex-wrap:wrap;
      padding-bottom:18px;
      border-bottom:1px solid rgba(255,255,255,0.18);
    ">

      <!-- Logo -->
      <div style="display:flex; align-items:center;">
        <div style="width:140px;">
          <svg width="186" height="38" viewBox="0 0 206 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.2787 0H33.9032L25.1719 37.9522H4.83003L0 47.2787H36.5969L47.2787 0Z" fill="white"/>
          <path d="M123.337 9.19819L125.084 7.26656H138.79L141.182 4.87503H127.752L129.5 2.9434H143.114L146.057 0H91.1413L84.4263 12.6935H105.123L96.5685 47.2787H109.447L118.185 12.6935H133.363L136.859 9.19819H123.337Z" fill="white"/>
          <path d="M84.5344 37.2527C84.5344 37.2527 89.48 30.354 89.48 24.1912C80.413 21.4318 80.1382 21.2478 80.1382 21.2478C80.1382 21.2478 80.4129 25.479 78.3065 29.0663C77.5738 28.9743 76.7495 28.0545 75.8337 27.3186C74.9178 26.5828 67.2245 19.0403 66.3086 17.4766C65.3928 15.9129 64.7516 14.4412 64.7516 12.5095C64.7516 10.6699 66.9498 6.07081 71.987 6.07081C74.0019 6.07081 78.856 7.26655 77.1158 12.6015C81.3288 5.24295 84.168 0 84.168 0H54.2192L53.3033 3.31135C53.3033 3.31135 50.6473 12.0496 57.6079 19.1322C57.6079 19.1322 46.4343 26.2148 46.4343 34.7691C46.4343 43.3235 54.8603 47.2787 64.6601 47.2787C67.6824 47.2787 74.4599 46.2669 77.9401 44.2433L80.5046 47.0947H92.8688L84.5344 37.2527ZM65.118 39.4602C61.363 39.4602 57.4247 36.9767 57.4247 33.9413C57.4247 31.9177 59.348 29.0663 63.6526 26.6748L72.5365 37.1607C72.4449 37.1607 68.8731 39.4602 65.118 39.4602Z" fill="white"/>
          <path d="M150.584 28.7051H145.326L136.771 47.2788H140.87L142.92 42.5187H147.999L148.534 47.2788H152.811L150.584 28.7051ZM144.078 39.3453L145.771 35.4252C146.217 34.3052 146.752 32.9052 147.197 31.8785H147.286C147.375 32.9985 147.465 34.3985 147.554 35.4252L147.999 39.3453H144.078Z" fill="white"/>
          <path d="M163.99 28.7051C161.806 28.7051 159.895 28.8908 158.53 29.0765L155.344 47.2788H159.349L160.623 40.0351H161.806C163.444 40.0351 164.081 40.6852 164.172 43.0069C164.263 45.2357 164.445 46.7216 164.719 47.2788H168.905C168.723 46.5359 168.541 44.1213 168.359 42.0782C168.177 40.4065 167.722 39.1064 166.539 38.642V38.5492C168.177 37.9919 170.088 36.3203 170.452 33.9986C170.725 32.3269 170.361 31.0268 169.451 30.0981C168.359 29.0766 166.63 28.7051 163.99 28.7051ZM166.357 34.3701C166.084 35.9488 164.718 37.0633 162.716 37.0633H161.078L161.988 31.9555C162.261 31.8626 162.898 31.8626 163.808 31.8626C165.72 31.7697 166.721 32.6055 166.357 34.3701Z" fill="white"/>
          <path d="M199.22 28.7051C194.172 28.7051 190.206 32.7822 189.304 38.1279C188.403 43.2923 190.746 47.2788 195.795 47.2788C200.753 47.2788 204.81 43.6547 205.801 37.7655C206.703 32.7822 204.539 28.7051 199.22 28.7051ZM201.745 37.9467C201.114 41.4802 199.221 44.1077 196.606 44.1077C193.992 44.1077 192.91 41.6614 193.451 38.1279C194.082 34.5943 195.975 31.9668 198.589 31.9668C201.294 31.8762 202.286 34.6849 201.745 37.9467Z" fill="white"/>
          <path d="M135.513 32.1072C136.368 32.1072 137.128 32.1992 137.699 32.3831L138.459 28.9809C137.794 28.797 136.843 28.7051 135.893 28.7051C130.381 28.7051 125.439 32.1072 124.299 38.2678C123.348 43.417 125.914 47.2788 132.187 47.2788C133.232 47.2788 134.182 47.1869 134.943 47.003L135.608 43.8767L135.703 43.6009C135.038 43.7848 134.182 43.8767 133.517 43.8767C130.381 43.8767 128.67 42.2216 128.67 39.3712C128.67 38.9115 128.67 38.4517 128.765 37.992C129.335 34.0381 132.282 32.1072 135.513 32.1072Z" fill="white"/>
          <path d="M188.271 29.5493C188.271 29.5493 187.964 29.1272 187.426 28.7051C187.887 29.1272 188.271 29.5493 188.271 29.5493Z" fill="white"/>
          <path d="M177.965 30.2876C175.047 31.8575 172.949 34.7201 172.402 38.0445C172.402 38.0445 172.402 38.0445 172.402 38.1368C171.946 40.8148 172.402 43.2158 173.679 44.7856C174.955 46.4478 176.962 47.2788 179.88 47.2788C182.069 47.2788 184.258 46.7248 185.535 46.2631L187.085 36.567H181.339L180.792 39.799H183.163L182.525 43.6775C182.251 43.8621 181.157 43.9545 180.336 43.9545C178.056 43.9545 176.415 42.6617 176.141 40.3531C176.141 40.1684 176.141 40.0761 176.141 39.8914C176.141 35.7359 178.421 33.889 178.421 33.889C178.603 33.7043 178.695 33.612 178.877 33.4273C178.877 33.4273 180.154 32.0422 183.346 31.9498C184.258 31.9498 185.261 31.9498 186.447 32.1345C186.811 32.2269 187.267 32.3192 187.632 32.4116L188.27 29.1795C188.27 29.1795 187.906 29.0872 187.267 28.9948C185.535 28.6255 181.613 28.2561 177.965 30.2876Z" fill="white"/>
          </svg>

         


        </div>
      </div>

      <!-- Menu -->
      <!-- Menu -->
      <nav style="
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:44px;
        flex-wrap:wrap;
        margin-left:auto;
        padding-left:220px;
        flex:1;
      ">
        ${[
          'Beranda',
          'Tentang Kami',
          'Keunggulan',
          'Layanan',
          'Cara Kirim',
          'Kontak'
        ].map(item => `
          <a href="#"
             style="
              color:#ffffff;
              text-decoration:none;
              font-size:14px;
              font-weight:400;
              transition:.2s;
             "
             onmouseover="this.style.opacity='0.7'"
             onmouseout="this.style.opacity='1'"
          >
            ${item}
          </a>
        `).join('')}
      </nav>
    </div>

   <!-- GANTI HANYA bagian Main Footer menjadi ini -->

<div style="
  display:grid;
  grid-template-columns:1.2fr 1fr 1fr;
  gap:70px;
  padding:42px 0 50px;
  align-items:start;
">

  <!-- LEFT -->
  <div>
    <h3 style="
      margin:0 0 14px;
      font-size:30px;
      font-weight:300;
      color:#ffffff;
      line-height:1.2;
    ">
      JNT Cargo Wonokromo
    </h3>

    <p style="
      margin:0;
      color:#d5e9dd;
      font-size:15px;
      line-height:2;
      max-width:290px;
      text-align:justify;
    ">
      Solusi pengiriman kargo terpercaya ke seluruh Indonesia
    </p>

    <!-- WA BUTTON -->
    <div style="margin-top:42px;">
      <a href="https://wa.me/6281233538858"
         target="_blank"
         style="
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:12px;
          width:185px;
          height:42px;
          background:#5BC58B;
          border-radius:999px;
          text-decoration:none;
          color:white;
          font-size:14px;
          font-weight:500;
          transition:.25s;
         "
         onmouseover="this.style.transform='translateY(-2px)'"
         onmouseout="this.style.transform='translateY(0px)'"
      >

        <!-- WA ICON -->
        <svg width="27" height="27" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.2038 6.00441C31.3195 2.1347 26.1524 0.0022082 20.653 0C15.1659 0 9.99053 2.1306 6.08075 5.99937C2.16404 9.87476 0.00504732 15.0249 0 20.4823V20.4886V20.4924C0.000630915 23.7956 0.868454 27.1277 2.51577 30.1694L0.0564669 41.3476L11.3634 38.7757C14.2271 40.2189 17.4224 40.9798 20.6451 40.9811H20.6533C26.1394 40.9811 31.3148 38.8501 35.2252 34.9811C39.1454 31.1025 41.3053 25.959 41.3079 20.4981C41.3094 15.0757 39.1419 9.92839 35.2038 6.00441ZM20.653 37.7539H20.6457C17.752 37.7527 14.8849 37.0262 12.3546 35.6523L11.8199 35.3621L4.30126 37.0722L5.93438 29.6501L5.61956 29.1072C4.05426 26.4079 3.22713 23.4281 3.22713 20.4889C3.23312 10.9757 11.0495 3.22713 20.6524 3.22713C25.2915 3.22902 29.6505 5.02744 32.9262 8.29053C36.2514 11.6041 38.082 15.9391 38.0804 20.4972C38.0766 30.0126 30.2587 37.7539 20.653 37.7539Z" fill="white"/>
        <path d="M15.0332 11.457H14.1278C13.8127 11.457 13.301 11.575 12.8682 12.046C12.4351 12.5173 11.2146 13.6564 11.2146 15.9731C11.2146 18.2898 12.9077 20.5283 13.1436 20.8428C13.3799 21.157 16.4118 26.063 21.2136 27.9504C25.2045 29.5189 26.0168 29.2069 26.8827 29.1283C27.749 29.0501 29.678 27.9895 30.0717 26.8901C30.4654 25.7908 30.4654 24.8482 30.3474 24.6513C30.2291 24.4551 29.914 24.3375 29.4417 24.1021C28.9692 23.8665 26.6537 22.7081 26.2206 22.5507C25.7875 22.3939 25.4726 22.3154 25.1575 22.787C24.8424 23.2577 23.9146 24.3466 23.6389 24.6608C23.3635 24.9753 23.0878 25.0148 22.6152 24.7791C22.1427 24.5428 20.6367 24.0368 18.8319 22.4331C17.4272 21.1848 16.4525 19.593 16.1767 19.1217C15.9013 18.6507 16.1474 18.3958 16.3843 18.1608C16.5966 17.9501 16.8834 17.6618 17.1196 17.387C17.3556 17.1119 17.4228 16.9157 17.5805 16.6015C17.7379 16.2873 17.6591 16.0122 17.5411 15.7769C17.4228 15.5413 16.5162 13.2129 16.096 12.2816H16.0963C15.7424 11.4974 15.3698 11.4709 15.0332 11.457Z" fill="white"/>
        </svg>


        Contact us
      </a>
    </div>
  </div>

  <!-- CENTER -->
  <div style="
    padding-left:25px;
    display:flex;
    flex-direction:column;
    gap:46px;
  ">

    <div>
      <h4 style="
        margin:0 0 16px;
        font-size:18px;
        font-weight:500;
        color:#ffffff;
      ">
        Alamat
      </h4>

      <p style="
        margin:0;
        color:#d5e9dd;
        font-size:15px;
        line-height:2;
      ">
        Jl. Ngagel No.213B, Ngagel, Kec.<br>
        Wonokromo, Surabaya, Jawa Timur 60246
      </p>
    </div>

    <div>
      <h4 style="
        margin:0 0 16px;
        font-size:18px;
        font-weight:500;
        color:#ffffff;
      ">
        Contact Person
      </h4>

      <p style="
        margin:0 0 8px;
        color:#d5e9dd;
        font-size:15px;
      ">
        Telp &nbsp; : 0812-3353-8858
      </p>

      <p style="
        margin:0;
        color:#d5e9dd;
        font-size:15px;
      ">
        Email &nbsp; : -
      </p>
    </div>
  </div>

  <!-- RIGHT -->
  <div style="
    padding-left:70px;
  ">
    <h4 style="
      margin:0 0 18px;
      font-size:18px;
      font-weight:500;
      color:#ffffff;
    ">
      Tag
    </h4>

    <div style="
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    ">

      ${[''].map(tag => `
        <a href="#"
           style="
            height:46px;
            border:1px solid rgba(255,255,255,0.45);
            border-radius:10px;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#ffffff;
            text-decoration:none;
            font-size:14px;
            transition:.2s;
           "
           onmouseover="
            this.style.background='rgba(255,255,255,0.08)'
           "
           onmouseout="
            this.style.background='transparent'
           "
        >
          ${tag}
        </a>
      `).join('')}

    </div>
  </div>

</div>

  </div>

  <!-- Bottom -->
  <div style="
    border-top:1px solid rgba(255,255,255,0.08);
  ">
    <div style="
      max-width:1380px;
      margin:0 auto;
      padding:18px 55px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:20px;
    ">

      <p style="
        margin:0;
        font-size:14px;
        color:#d5e9dd;
      ">
        2026 JNT Cargo Wonokromo      </p>

      <div style="
        display:flex;
        align-items:center;
        gap:14px;
      ">

        <span style="
          color:#d5e9dd;
          font-size:14px;
        ">
          Connect with us
        </span>

   <!-- Social -->
    ${[
      {
        svg: `
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2001_233)">
          <path d="M6.66066 4.40015C4.77043 4.40015 3.24577 6.00105 3.24577 7.9858C3.24577 9.97054 4.77043 11.5714 6.66066 11.5714C8.55089 11.5714 10.0756 9.97054 10.0756 7.9858C10.0756 6.00105 8.55089 4.40015 6.66066 4.40015ZM6.66066 10.3169C5.43915 10.3169 4.44053 9.27151 4.44053 7.9858C4.44053 6.70008 5.43617 5.65466 6.66066 5.65466C7.88515 5.65466 8.88079 6.70008 8.88079 7.9858C8.88079 9.27151 7.88218 10.3169 6.66066 10.3169ZM11.0118 4.25348C11.0118 4.71846 10.6551 5.08982 10.2152 5.08982C9.77241 5.08982 9.41874 4.71534 9.41874 4.25348C9.41874 3.79162 9.77538 3.41714 10.2152 3.41714C10.6551 3.41714 11.0118 3.79162 11.0118 4.25348ZM13.2735 5.1023C13.223 3.98198 12.9793 2.98961 12.1976 2.172C11.4189 1.35438 10.4738 1.09849 9.40685 1.04231C8.30719 0.976781 5.01117 0.976781 3.91151 1.04231C2.84751 1.09537 1.90239 1.35126 1.12074 2.16887C0.339091 2.98649 0.0983539 3.97886 0.0448568 5.09918C-0.0175564 6.25383 -0.0175564 9.71464 0.0448568 10.8693C0.0953818 11.9896 0.339091 12.982 1.12074 13.7996C1.90239 14.6172 2.84454 14.8731 3.91151 14.9293C5.01117 14.9948 8.30719 14.9948 9.40685 14.9293C10.4738 14.8762 11.4189 14.6203 12.1976 13.7996C12.9763 12.982 13.22 11.9896 13.2735 10.8693C13.3359 9.71464 13.3359 6.25695 13.2735 5.1023ZM11.8529 12.1082C11.621 12.7198 11.1723 13.1911 10.5868 13.4376C9.71 13.8027 7.62955 13.7185 6.66066 13.7185C5.69177 13.7185 3.60836 13.7996 2.73457 13.4376C2.15205 13.1942 1.70327 12.723 1.46847 12.1082C1.12074 11.1876 1.20099 9.00313 1.20099 7.9858C1.20099 6.96846 1.12371 4.78087 1.46847 3.8634C1.70029 3.25175 2.14908 2.78053 2.73457 2.53399C3.61133 2.16887 5.69177 2.25313 6.66066 2.25313C7.62955 2.25313 9.71297 2.172 10.5868 2.53399C11.1693 2.7774 11.6181 3.24863 11.8529 3.8634C12.2006 4.78399 12.1203 6.96846 12.1203 7.9858C12.1203 9.00313 12.2006 11.1907 11.8529 12.1082Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_2001_233">
          <rect width="13.3148" height="15.9778" fill="white"/>
          </clipPath>
          </defs>
          </svg>

        `,
        link:'https://instagram.com'
      },
      {
        svg: `
          <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.8908 10.8239C2.81555 10.8239 1.23702 10.8244 0.508978 10.8237C0.134175 10.8234 0.000453739 10.6887 0.000453739 10.3115C-2.55482e-05 9.34266 -0.000265192 8.37378 0.000453739 7.4049C0.000693383 7.0325 0.142083 6.89039 0.512093 6.89015C1.24013 6.88967 2.81004 6.88991 2.8908 6.88991C2.8908 6.82353 2.89056 5.42473 2.8908 4.78056C2.89128 3.82822 3.06118 2.91661 3.54503 2.08193C4.04037 1.2276 4.76122 0.642393 5.68504 0.304016C6.27673 0.0871385 6.89093 0.000627159 7.5188 0.000147872C8.30435 -0.000331416 9.0899 0.000387508 9.8757 0.00182537C10.2134 0.00230466 10.3631 0.151603 10.3639 0.491657C10.3653 1.40302 10.3653 2.31439 10.3639 3.22551C10.3634 3.56916 10.2198 3.7072 9.8745 3.71103C9.23058 3.71798 8.58617 3.71367 7.94297 3.73955C7.29329 3.73955 6.95156 4.05684 6.95156 4.72928C6.93599 5.44054 6.94509 6.15252 6.94509 6.88967C7.00596 6.88967 8.85481 6.88943 9.71897 6.88967C10.1115 6.88967 10.2457 7.02459 10.2457 7.41928C10.2457 8.38289 10.2455 9.34674 10.2447 10.3103C10.2445 10.6993 10.1185 10.8234 9.72352 10.8237C8.85937 10.8241 7.0177 10.8239 6.93718 10.8239V18.6231C6.93718 19.0389 6.80634 19.1714 6.39607 19.1714C5.39579 19.1714 4.39528 19.1717 3.39501 19.1714C3.03243 19.1714 2.89104 19.0305 2.89104 18.6679C2.8908 16.1279 2.8908 10.913 2.8908 10.8239Z" fill="black"/>
          </svg>

        `,
        link:'https://facebook.com'
      },
      {
        svg: `
        <svg width="15" height="18" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9881 3.9866C13.8637 3.92157 13.7425 3.85029 13.6252 3.77302C13.2838 3.54485 12.9709 3.27601 12.6931 2.97228C11.998 2.16805 11.7383 1.35217 11.6427 0.780932H11.6466C11.5667 0.306781 11.5997 0 11.6047 0H8.43864V12.3792C8.43864 12.5454 8.43864 12.7097 8.43173 12.872C8.43173 12.8922 8.42981 12.9108 8.42866 12.9326C8.42866 12.9415 8.42866 12.9508 8.42674 12.9601C8.42674 12.9625 8.42674 12.9648 8.42674 12.9671C8.39336 13.4113 8.25255 13.8403 8.0167 14.2166C7.78084 14.5928 7.45716 14.9046 7.07413 15.1247C6.67494 15.3543 6.22344 15.4748 5.76416 15.4742C4.28905 15.4742 3.09352 14.2579 3.09352 12.7559C3.09352 11.2538 4.28905 10.0376 5.76416 10.0376C6.04339 10.0373 6.3209 10.0817 6.5864 10.1692L6.59024 6.90956C5.78427 6.80429 4.96547 6.86906 4.1855 7.09978C3.40552 7.3305 2.6813 7.72217 2.05852 8.25007C1.51282 8.72951 1.05404 9.30155 0.702844 9.94048C0.569196 10.1735 0.0649464 11.1097 0.0038834 12.6293C-0.034521 13.4918 0.221636 14.3853 0.343762 14.7546V14.7624C0.420571 14.9798 0.718205 15.7219 1.20325 16.3475C1.59438 16.8494 2.05648 17.2902 2.57467 17.6558V17.6481L2.58235 17.6558C4.11507 18.709 5.81447 18.6398 5.81447 18.6398C6.10865 18.6278 7.0941 18.6398 8.21321 18.1036C9.45444 17.509 10.1611 16.6232 10.1611 16.6232C10.6125 16.094 10.9715 15.4908 11.2226 14.8396C11.5091 14.0781 11.6047 13.1648 11.6047 12.7997V6.23231C11.6431 6.25561 12.1547 6.59773 12.1547 6.59773C12.1547 6.59773 12.8916 7.07538 14.0415 7.38643C14.8664 7.60778 15.9778 7.65438 15.9778 7.65438V4.47628C15.5884 4.519 14.7976 4.39473 13.9881 3.9866Z" fill="black"/>
        </svg>

        `,
        link:'https://tiktok.com'
      }
    ].map(item => `
      <a href="${item.link}"
        target="_blank"
        style="
          width:28px;
          height:28px;
          border-radius:50%;
          background:white;
          display:flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          transition:.2s;
        "
        onmouseover="this.style.transform='scale(1.08)'"
        onmouseout="this.style.transform='scale(1)'"
      >
        ${item.svg}
      </a>
    `).join('')}

      </div>
    </div>
  </div>

</footer>

<style>

/* =========================================================
   TABLET
========================================================= */
@media (max-width: 992px){

  /* CONTAINER */
  #footer-mount footer > div:first-child{
    padding:32px 28px 0 !important;
  }

  /* NAVBAR TOP */
  #footer-mount footer > div:first-child > div:first-child{
    flex-direction:column !important;
    align-items:flex-start !important;
    gap:28px !important;
  }

  /* MENU */
  #footer-mount footer nav{
    width:100% !important;
    margin-left:0 !important;
    padding-left:0 !important;
    gap:18px 28px !important;
    justify-content:flex-start !important;
  }

  /* MAIN GRID */
  #footer-mount footer div[style*="grid-template-columns:1.2fr 1fr 1fr"]{
    grid-template-columns:1fr !important;
    gap:42px !important;
    padding:42px 0 44px !important;
  }

  /* REMOVE LEFT PADDING */
  #footer-mount footer div[style*="padding-left:25px"]{
    padding-left:0 !important;
  }

  #footer-mount footer div[style*="padding-left:70px"]{
    padding-left:0 !important;
  }

  /* DESCRIPTION */
  #footer-mount footer p{
    max-width:100% !important;
  }

  /* TAG GRID */
  #footer-mount footer div[style*="grid-template-columns:1fr 1fr"]{
    max-width:420px !important;
  }

  /* BOTTOM */
  #footer-mount footer > div:last-child > div{
    padding:18px 28px !important;
    flex-direction:column !important;
    align-items:flex-start !important;
    gap:18px !important;
  }

}


/* =========================================================
   MOBILE
========================================================= */
@media (max-width: 576px){

  /* CONTAINER */
  #footer-mount footer > div:first-child{
    padding:28px 18px 0 !important;
  }

  /* LOGO */
  #footer-mount footer svg{
    max-width:100% !important;
  }

  /* MENU */
  #footer-mount footer nav{
    display:grid !important;
    grid-template-columns:1fr 1fr !important;
    gap:14px 20px !important;
    width:100% !important;
  }

  #footer-mount footer nav a{
    font-size:13px !important;
  }

  /* TITLE */
  #footer-mount footer h3{
    font-size:24px !important;
    line-height:1.3 !important;
  }

  /* SECTION TITLE */
  #footer-mount footer h4{
    font-size:17px !important;
    margin-bottom:12px !important;
  }

  /* PARAGRAPH */
  #footer-mount footer p{
    font-size:14px !important;
    line-height:1.8 !important;
  }

  /* CONTACT BUTTON */
  #footer-mount footer a[href*="wa.me"]{
    width:100% !important;
    max-width:260px !important;
    height:48px !important;
    font-size:14px !important;
  }

  /* TAG AREA */
  #footer-mount footer div[style*="grid-template-columns:1fr 1fr"]{
    grid-template-columns:1fr !important;
    max-width:100% !important;
    gap:12px !important;
  }

  /* EMPTY TAG FIX */
  #footer-mount footer div[style*="grid-template-columns:1fr 1fr"] a{
    height:42px !important;
    font-size:13px !important;
  }

  /* BOTTOM */
  #footer-mount footer > div:last-child > div{
    padding:18px !important;
    text-align:left !important;
  }

  /* COPYRIGHT */
  #footer-mount footer > div:last-child p{
    font-size:13px !important;
  }

  /* SOCIAL WRAPPER */
  #footer-mount footer > div:last-child div[style*="display:flex"][style*="gap:14px"]{
    flex-wrap:wrap !important;
    gap:12px !important;
  }

  /* SOCIAL TEXT */
  #footer-mount footer span{
    font-size:13px !important;
  }

  /* SOCIAL ICON */
  #footer-mount footer a[target="_blank"]{
    flex-shrink:0 !important;
  }

}

</style>
`;