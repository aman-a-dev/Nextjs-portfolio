export function Bg({ children }) {
   return (
      <div className='min-h-[30px] w-full relative'>
         {/*  Diagonal Cross Grid Bottom Background */}
         <div
            className='absolute inset-0 -z-10'
            style={{
               backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
               backgroundSize: "40px 40px",
               WebkitMaskImage:
                  "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
               maskImage:
                  "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)"
            }}
         />
         {children}
      </div>
   );
}
