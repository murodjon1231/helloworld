import React from 'react';
const App = () => {
  const features = [
    {
      title: "Управление запасами",
      description: "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.",
      img: "https://s3-alpha-sig.figma.com/img/67ae/c29f/1013639d0f5d58352a06b04d2b8bef3c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cbzPHVGzIhbeBnOgXJMqdrHJf9Huw44srRt9zLtRtXeHTC4shQknO6fF8joMw9lsaf3GehmIkpxQaC7MYekXJGaZzrLQtIkHrifgNraLZkG835oDap2eI2nTDh9tgHz8TZCmU4b17jialvu1BmK6c6aZCPNFCR3KkJwMb93kAchSbeR5KCQgzO-gY09BIESCyNMuuhtya5~lRjzHvNPhn74jzhfE6NusCyQHGmGeXooCOwIYkw8776mMqLOVx40P15oK3KkgHwO8q9XeIOZffwkcg5~BrUifdWn-w7ReV5K9E0pJVTaBOrQd~F5bUIaupAdPfY4TM6C1qMv1McuBmw__"
    },
    {
      title: "Автозаказ товаров",
      description: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.",
      img: "https://s3-alpha-sig.figma.com/img/5c3d/5ba6/e41d2c4e9e8daeb5c056490333115fc3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bBS9YWunF5-l2XbzEdVFmc4iabvdxXj2k5siZTlkYHKVMUqb25ZSSjnSWVzQ5pSFOyEpoRCD-ySd8SB6Re8nsQu4VZSJDhqw7GNu1Q-Hb-caHHsf4LLbSXTV06sM34b-qITXypmVxsYjOix13I3nJj8zv3i7HkQEuscgKAzyulNL8sRu-ydUIiTthjgGprEguAKj-t2yCeZbiIlyMTCz~pIAuTGRb1sujE5~SEa3ta3mt-yeMtb6CmSrHVevNy7NbTfPFLV9guhNymU0-oKAAsiW-vrgiS1PRO8p6fN6dwmYYwFurGQDmUsXqXqdm-3ZvODu-6hmrwGZ1fDtFbpYzw__"
    },
    {
      title: "Анализ магазина",
      description: "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.",
      img: "https://s3-alpha-sig.figma.com/img/379b/8326/4b59ca3e4f5721a865977fcf5cb06ab9?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fLDT~3Y3ibM2kfN862a1060YDyMnMVds7IhFrP2FkIm1BXA4nv-qex34QP8ey35OEZ6eseDU7~dOKJWInEdsjoF0XgLhJppPnP~S8layuKF5oyY~iPa7Y9XaBiJIRzBDDFJsv2~sKTm~XVjNEab8j64Ot6ddgYRQiBIo3llUbYwTPirYDdJ2cSNyoetArNtpqpRKuBdJwRuAjXV-F41aMhXFoQSxaSQllxx~icJGANGceEiq-9Ha16ig8So79iL64vdD92c2eckxZlpMXYzq7uF-vvU-9PvjHD6kou2a23Ju-SoWGXd7ibQ4138IL7pKOFFF3PXCdweKP8S9fH0DrQ__"
    },
    {
      title: "Прогнозирование спроса",
      description: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.",
      img: "https://s3-alpha-sig.figma.com/img/34bd/8356/af7cbf421be0b7c1ef3d9459d06eee96?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rL7eXpHC30qN2xAF5szoiZ~d3D1QfRmDAmZZdkzf9C3CACs8FgWzWZUATDatgCfleof2qu4LaitneWV3L6yniARww1qchd19qxlQRhBp-FCuOw~2b9BBOJIgJjumI8zhYEY~-TQXPekaVB39vvoFFlITr0tGru7YF0cd~Velk8JX7wmpt6K20A4w20FhxL4PVMGop3U4L1fY2JAV1AZcITYIQ1loneVcVxfwA-pKOHPdpAUwtHfob2nj2hNt0kJjPY5~ptxrEvVcBlE4IqiuGmyBaVD-Xae9Gehe6wKs~EWRzHfoUL0~VfIGEmLmBuaRFUo0dyCNRoejpBOSxxlybQ__"
    },
    {
      title: "Управление поставками",
      description: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.",
      img: "https://s3-alpha-sig.figma.com/img/c300/7f3d/677d9faac8d7ad43a11394fe658714d4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WbPdX4yEE4hnLeiVC6J9dHS4-oHeOSdu8wZ8-xo151DRIMHkdDbzAOIIIC13-E2MhzUBph9N9AfY8RDciTwQ2urt-cQlSGEAhuOjdmrEktUQj7DnPRLh3wGl-g7OPmwXN41qJZqhDAvHnhWk7ewPg3wycK8uwIR1GwKIK0YfZcZn0j-0ZeYBmHe65PoR643KYZB~A4vIru-qQH9OLSX4HJrRPBKspqA0c-i3~ZA~QMJjjw9P6LPHWLi-GzoTUTIgeHYr2fv4~QmwNO34FCo4O1IKQgycbU408p~n3uTlBV0DrzSGLpj65egO9folxSrV1~yKXthgOvXTl5JqGsHvKA__"
    },
    {
      title: "Управление ассортиментом",
      description: "Сервис 1С-Товары позволяет определить ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а наличие каких увеличить на полках магазина. Сервис позволяет узнать необходимую информацию: динамику продаж и остатков, периоды дефицита, размер оптимального остатка.",
      img: "https://s3-alpha-sig.figma.com/img/404d/d1d8/86a4e25f818cb28c6d0e705184278e75?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iTl4~y-jYRR0jiOsXn2~1mZiWT4tGqOYAGSiQvbWX9Aq9DQZizkavSPfSV0nnNPQPHt2zHJv1rKox5ZFyvrf~h3gVNgn52jO4SnvEAGyPFekYLYcgy4hr~kQQoqNNOipnSHZO8W9ebmUWn~Iak4DfaqMCRrdgWMw-3f65dSRLhN~Y9EEbOeou6NtJ2aTRUnAIqIkkAoGsjaz1CsC8VgIRvvPS7MPZiraS8n8fyxX6mPvAsspv~Hd5Isij7oyfAmGG-sSEpl2kFPBAo8T3l-aJm4bG-XBEmhsCebFumteuYzPqnVUedozOjhPK8LMDMDvlmo6VTCRm9oVa31sp0zR3A__"
    }
  ];



  return (
    <div className="mx-auto w-[90%] mt-5 ">
      <header >
        <div className="container mx-auto  flex justify-between items-center bg-white">
          <div className="flex items-center">
            <div className="">
              <img src="/logo.svg" alt="Logo" />
            </div>
          </div>
          <div className='flex items-center gap-[50px] '>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium">Возможности</a>
              <a href="#" className="text-sm font-medium">Тарифы</a>
              <a href="#" className="text-sm font-medium">Блог</a>
              <a href="#" className="text-sm font-medium">Контакты</a>
            </nav>
            <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">Вход</a>
          </div>
        </div>
      </header>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-6xl font-bold mb-6">Управление запасами розничного магазина</h1>
            <p className="text-lg mb-8">Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full font-medium">Заказать демонстрацию</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/img.svg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="flex-wrap grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-4xl shadow-sm">
                <div className='flex items-center mb-4 gap-2'>
                  <img className='w-12 h-12' src={feature.img} alt="" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
                <button className="mt-4 p-3 rounded-full  text-green-500 border font-medium">Подробнее</button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <img src="/img2.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">С нами удобнее</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-[#E5F6E6] rounded-[40px] ">
              <h3 className="font-semibold text-center">Без 1С: Товары</h3>
              <ul className="space-y-3 w-[80%] mx-auto p-4">
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/img3.svg" alt="" /></span>
                  <span>Лишний товар складируется и не продается</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/img3.svg" alt="" /></span>
                  <span>Постоянно приходится думать какой продукт будет актуален</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/img3.svg" alt="" /></span>
                  <span>Лишний товар складируется и не продается</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/img3.svg" alt="" /></span>
                  <span>Постоянно приходится думать какой продукт будет актуален</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/img3.svg" alt="" /></span>
                  <span>Лишний товар складируется и не продается</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/img3.svg" alt="" /></span>
                  <span>Постоянно приходится думать какой продукт будет актуален</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/img3.svg" alt="" /></span>
                  <span>Лишний товар складируется и не продается</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 bg-[#E5F6E6] rounded-[40px]  ">
              <h3 className="font-semibold text-center">Вместе с 1С: Товары</h3>
              <ul className="space-y-3  w-[80%] mx-auto p-4">
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/check.svg" alt="" /></span>
                  <span>Организованная система остатков</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/check.svg" alt="" /></span>
                  <span>В магазине есть определенная ассортиментная матрица</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/check.svg" alt="" /></span>
                  <span>Организованная система остатков</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/check.svg" alt="" /></span>
                  <span>В магазине есть определенная ассортиментная матрица</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/check.svg" alt="" /></span>
                  <span>Организованная система остатков</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/check.svg" alt="" /></span>
                  <span>В магазине есть определенная ассортиментная матрица</span>
                </li>
                <li className='flex items-center gap-2'>
                  <span><img className='' src="/check.svg" alt="" /></span>
                  <span>Организованная система остатков</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className='flex justify-between items-center mb-8'>
            <h2 className="text-2xl font-bold mb-8">Популярные тарифы</h2>
            <button className='bg-[#43A548] p-3 rounded-full text-white'>Все продукты</button>
          </div>
          <div className='flex gap-8 flex-wrap justify-center'>
            <div className="card w-[420px] bg-base-100 shadow-sm rounded-[40px]">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">1С-Товары 300</h2>
                    <button className="text-[#43A548] text-center  border border-[#43A548] p-1 rounded-full">400 руб/мес</button>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Анализ работы розничного магазина или сети магазинов</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-right">
                    <button className="bg-none text-[#43A548]  text-bold">Подробнее -</button>
                  </div>
                </div>

            </div>
            <div className="card w-[420px] bg-base-100 shadow-sm rounded-[40px]">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">1С-Товары 30000</h2>
                    <button className="text-[#43A548] text-center  border border-[#43A548] p-1 rounded-full">1700 руб/мес</button>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Анализ работы розничного магазина или сети магазинов</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-right">
                    <button className="bg-none text-[#43A548]  text-bold">Подробнее -</button>
                  </div>
                </div>

            </div>
            <div className="card w-[420px] bg-base-100 shadow-sm rounded-[40px]">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">1С-Товары</h2>
                    <button className="text-[#43A548] text-center  border border-[#43A548] p-1 rounded-full">4 500 руб/мес</button>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Анализ работы розничного магазина или сети магазинов</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-right">
                    <button className="bg-none text-[#43A548]  text-bold">Подробнее -</button>
                  </div>
                </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default App;