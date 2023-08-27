import React from 'react'

export default function UserAccount() {
  return (
    <div className='user-account flex-column p-6 w-[315px] xy-center gap-6 rounded-3xl'>
      <div className='flex-rows items-center justify-between'>
        <button className='rounded-full xy-center gap-2 p-3 bg-[#292C31]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.6682 7.6999H12.8753L12.0218 6.84635L10.9875 5.81203C10.8703 5.69488 10.8703 5.50493 10.9875 5.38777C11.1046 5.27061 11.2946 5.27061 11.4117 5.38777L13.8117 7.78777C13.868 7.84403 13.8996 7.92034 13.8996 7.9999C13.8996 8.07947 13.868 8.15577 13.8117 8.21204L11.4117 10.612C11.2946 10.7292 11.1046 10.7292 10.9875 10.612C10.8703 10.4949 10.8703 10.3049 10.9875 10.1878L12.0218 9.15346L12.8753 8.2999H11.6682H5.59961C5.43392 8.2999 5.29961 8.16559 5.29961 7.9999C5.29961 7.83422 5.43392 7.6999 5.59961 7.6999L11.6682 7.6999ZM2.09961 3.1999C2.09961 3.03422 2.23392 2.8999 2.39961 2.8999C2.56529 2.8999 2.69961 3.03422 2.69961 3.1999V12.7999C2.69961 12.9656 2.56529 13.0999 2.39961 13.0999C2.23392 13.0999 2.09961 12.9656 2.09961 12.7999V3.1999Z" fill="white" stroke="white" />
          </svg>
        </button>
        <button className='rounded-full xy-center gap-2 p-3 bg-[#292C31]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.78925 8.89462C5.9241 8.62543 6 8.32158 6 8C6 7.67842 5.9241 7.37457 5.78925 7.10538M5.78925 8.89462C5.46089 9.55006 4.78299 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C4.78299 6 5.46089 6.44994 5.78925 7.10538M5.78925 8.89462L10.2108 11.1054M5.78925 7.10538L10.2108 4.89462M10.2108 4.89462C10.5391 5.55006 11.217 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 4.32158 10.0759 4.62543 10.2108 4.89462ZM10.2108 11.1054C10.0759 11.3746 10 11.6784 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C11.217 10 10.5391 10.4499 10.2108 11.1054Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div className='justify-center items-center'>
        <img src="./assets/logo/Details.png" className='' alt="User Account Logo" />
      </div>
      <div className='pb-6 gap-2 flex-column xy-center bottom-line'>
        <div className='flex-rows xy-center gap-2'>
          <p className='time-text text-center text-white'>
            @amandafumiko
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11.4241 3.92417L14.0758 6.57583M12.5491 2.79917C13.2814 2.06694 14.4686 2.06694 15.2008 2.79917C15.933 3.53141 15.933 4.71859 15.2008 5.45083L4.875 15.7766H2.25V13.0983L12.5491 2.79917Z" stroke="#E5E1A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='px-2 py-1 rounded-full user-account-key gap-2 flex items-center'>
          <p className='user-account-key-text text-white'>
            1236asd1...e12dwsh12e86g
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 12H4.5C3.67157 12 3 11.3284 3 10.5V4.5C3 3.67157 3.67157 3 4.5 3H10.5C11.3284 3 12 3.67157 12 4.5V6M7.5 15H13.5C14.3284 15 15 14.3284 15 13.5V7.5C15 6.67157 14.3284 6 13.5 6H7.5C6.67157 6 6 6.67157 6 7.5V13.5C6 14.3284 6.67157 15 7.5 15Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <p className='text-center user-account-key-text text-[#676A71] self-stretch'>
          Joined march 2023
        </p>
      </div>
      <div className='flex-column bottom-line gap-4 pb-6'>
        <p className='instruction-text text-center text-white'>Social Account</p>
        <div className='gap-[10px] flex-rows xy-center'>
          <div className='xy-center p-2 bg-[#0A49AF] rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M13.6906 2.714C12.7642 2.25429 11.9607 2.20319 10.922 2.00921C10.9031 2.00547 10.2397 1.9905 10.2299 2.00921C10.1021 2.25497 10.3289 2.46201 10.2299 2.714C9.1127 2.53312 7.86342 2.53312 6.76915 2.714C6.67003 2.45641 6.89749 2.25497 6.76915 2.00921C6.75941 1.99112 6.09592 2.00609 6.077 2.00921C5.03887 2.20258 4.2354 2.25368 3.30841 2.714C3.30038 2.71774 3.31298 2.7059 3.30841 2.714C1.42406 5.75852 0.978737 8.94341 1.23197 11.8763C1.22165 11.8676 1.23312 11.8906 1.23197 11.8763C2.47521 12.8637 3.51077 13.5934 4.69271 13.9907C4.68066 14.0075 4.71162 13.9969 4.69271 13.9907C4.97229 13.5778 5.86332 13.0389 6.077 12.5811C6.08961 12.5543 5.41063 12.5917 5.38486 12.5811C4.98954 12.4189 5.0548 12.1008 4.69271 11.8763C4.66407 11.8582 4.66636 11.8975 4.69271 11.8763C4.61995 11.9411 4.76891 11.8146 4.69271 11.8763C4.67723 11.8688 4.70587 11.8644 4.69271 11.8763C7.07145 13.0508 9.95566 13.0508 12.3063 11.8763C12.2926 11.8645 12.3218 11.8682 12.3063 11.8763C12.2296 11.8146 12.3791 11.9412 12.3063 11.8763C12.3327 11.8975 12.335 11.8582 12.3063 11.8763C11.9443 12.1052 12.0101 12.4196 11.6142 12.5811C11.5884 12.5917 10.9094 12.5543 10.922 12.5811C11.1403 13.0383 12.0319 13.5777 12.3063 13.9907C12.2874 13.9969 12.3178 14.0081 12.3063 13.9907C13.494 13.5934 14.5238 12.8637 15.7671 11.8763C15.7659 11.8907 15.7779 11.8676 15.7671 11.8763C16.0701 8.48564 15.3321 5.32502 13.6906 2.714C13.6987 2.71774 13.6866 2.70528 13.6906 2.714ZM6.077 10.4667C5.36083 10.4667 4.69271 9.22564 4.69271 8.35234C4.69271 7.47912 5.34939 6.94276 6.077 6.94276C6.81033 6.94276 7.47272 7.48535 7.4613 8.35234C7.4613 9.22564 6.8046 10.4667 6.077 10.4667ZM10.922 10.4667C10.2059 10.4667 9.53774 9.22564 9.53774 8.35234C9.53774 7.47912 10.1945 6.94276 10.922 6.94276C11.6554 6.94276 12.3178 7.48535 12.3063 8.35234C12.3063 9.22564 11.6554 10.4667 10.922 10.4667Z" fill="#F7F7F7" />
            </svg>
          </div>
          <div className='xy-center p-2 bg-[#2E9AD0] rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M15.1663 3.86656C14.6652 4.08396 14.1353 4.22767 13.593 4.29323C14.1651 3.95144 14.5939 3.41375 14.7997 2.7799C14.262 3.09994 13.6735 3.32543 13.0597 3.44656C12.6494 3.00161 12.103 2.70543 11.5062 2.60446C10.9094 2.5035 10.296 2.60347 9.7622 2.88869C9.22837 3.17391 8.8043 3.62825 8.5565 4.18045C8.30871 4.73266 8.2512 5.35149 8.39301 5.9399C7.30596 5.88491 6.24264 5.60186 5.27211 5.10914C4.30159 4.61641 3.44557 3.92502 2.75967 3.0799C2.5191 3.50001 2.39269 3.97578 2.39301 4.4599C2.39215 4.90948 2.50249 5.35231 2.71418 5.74894C2.92587 6.14557 3.23235 6.4837 3.60634 6.73323C3.17166 6.7214 2.74626 6.60476 2.36634 6.39323V6.42656C2.3696 7.05649 2.59034 7.66596 2.99122 8.15187C3.3921 8.63779 3.94851 8.97032 4.56634 9.09323C4.32851 9.16561 4.08159 9.20377 3.83301 9.20656C3.66093 9.20455 3.48929 9.18895 3.31967 9.1599C3.49561 9.70177 3.83609 10.1753 4.29372 10.5147C4.75136 10.854 5.30339 11.0423 5.87301 11.0532C4.91114 11.8101 3.7236 12.2231 2.49967 12.2266C2.27683 12.2273 2.05416 12.2139 1.83301 12.1866C3.08263 12.9934 4.53888 13.4217 6.02634 13.4199C7.0528 13.4306 8.0711 13.2366 9.02175 12.8493C9.9724 12.462 10.8364 11.8892 11.5631 11.1642C12.2899 10.4393 12.865 9.57682 13.2547 8.62717C13.6444 7.67751 13.841 6.65971 13.833 5.63323C13.833 5.5199 13.833 5.3999 13.833 5.2799C14.3561 4.88977 14.8073 4.41151 15.1663 3.86656Z" fill="#F7F7F7" />
            </svg>
          </div>
        </div>
      </div>
      <div className='flex-column gap-2 items-start'>
        <p className='instruction-text text-white'>User Interface</p>
        <div className='flex-rows gap-[10px] items-center'>
          <p className='instruction-text text-[#676A71]'>
            Videos autoplay in competition thumbnails
            (disable this if your device is running slow)
          </p>
          <button className='check-btn rounded-full w-11 gap-1 p-1'>
            <div className='w-4 h-4 rounded-full bg-white'></div>
          </button>
        </div>
      </div>
    </div>
  )
}