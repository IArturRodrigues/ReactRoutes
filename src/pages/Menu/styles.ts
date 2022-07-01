import tw from 'twin.macro';

const HORIZONTAL_PADDING = 'px-15.625';

// px-[250px]
// py-[20px]
export const MainMenu = tw.nav`
   ${HORIZONTAL_PADDING}
   py-5
   desktop_xsm:px-6.25
   desktop_xsm_sm:px-9.375
   desktop_sm_md:px-12.5
`;

export const Header = tw.header`
   h-[18.75rem]
   bg-header
   bg-cover
   bg-no-repeat
   flex
   items-center
   ${HORIZONTAL_PADDING}
   desktop_xsm:px-6.25
   desktop_xsm_sm:px-9.375
   desktop_sm_md:px-12.5
`;

export const HeaderText = tw.div`
   text-white
   text-[5rem]
   leading-tight
   min-w-25
   w-[40%]
`;

export const Carte = tw.section`
   py-[3.125rem]
   ${HORIZONTAL_PADDING}
   desktop_xsm:px-6.25
   desktop_xsm_sm:px-9.375
   desktop_sm_md:px-12.5
`;

export const CarteTitle = tw.h3`
   text-dark-900
   text-5xl
   mb-[1.875rem]
`;

export const CarteFilters = tw.div`
   items-center
   flex
   flex-wrap
   justify-between
   mb-[1.875rem]
   w-full
`;
