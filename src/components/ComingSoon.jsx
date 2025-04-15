// components/ComingSoon.tsx

import Image from 'next/image'

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4 text-center">
      <Image
        src="/logo.png" // 🔁 Reemplaza esto con tu logo
        alt="Logo ICDCM"
        width={500}
        height={500}
        className="mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¡Muy pronto estaremos en línea!</h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        Gracias por visitarnos. Estamos preparando un espacio especial donde podrás conocer más sobre nuestra iglesia,
        recibir palabra de vida y conectarte con lo que Dios está haciendo.
      </p>
      <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-8">
        “Edificados sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo.”<br />
        <span className="font-semibold">Efesios 2:20 – RVR1960</span>
      </blockquote>
      <p className="text-sm text-gray-500">Te esperamos con los brazos abiertos. ¡Vuelve pronto!</p>
    </div>
  );
}
