import React from 'react'
import hero from "./assets/hero.svg"
import hero2 from "./assets/hero2.svg"
import main from "./assets/main.svg"
import logo from "./assets/logo.svg"


const Azizbek = () => {
  return (
    <div className='bg-[#F7F8F8]'>
      <div className='flex justify-around items-center'>
        <img src={hero} alt="" />
        <div className='bg-[#FFFFFF] w-[650px] p-10 rounded-3xl'>
          <h1 className='text-2xl'>Получайте рекомендации по управлению ассортиментом</h1>
          <p>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».
            Каждую неделю вам на почту будет приходить письмо с рекомендациями:
            какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;
            какие товары у вас в избытке, а какие следует отнести к неликвидам;
            какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</p>
        </div>
      </div>
      <div className='flex justify-around items-center'>
        <img src={hero2} alt="" />
        <div className='bg-[#FFFFFF] w-[650px] p-10 rounded-3xl'>
          <h1 className='text-2xl'>Прогнозируйте спрос и управляйте запасами</h1>
          <p>Используйте 1С-Товары для более точного прогноза спроса. 1С-Товары учитывают средние продажи, тренды, периоды дефицита товара (пробелы на полках), сезонность спроса, праздники, распродажи, акции.
            Ежедневно 1С-Товары автоматически проверяют минимальные остатки и своевременно отправляет заявку поставщику, используя результаты прогноза. Так вы избежите как дефицита, так и излишков товара в магазине.</p>
        </div>
      </div>
      <div className='flex justify-center mt-[100px]'>
        <div className='w-[90%] bg-[#52E259] flex justify-around p-[70px] gap-[30px] rounded-3xl'>
          <div>
            <h1 className='text-white text-3xl w-[500px] pt-[50px]'>Хотите бесплатную консультацию?
              Оставляйте заявку</h1>
            <p className='text-white text-[20px] w-[500px] pt-[20px]'>Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время </p>
          </div>
          <div>
            <input placeholder='Сергей ' className='bg-amber-50 w-[700px] rounded-3xl pl-[10px] mt-[20px] h-[50px]' type="text" />
            <input placeholder='Ваш телефон ' className='bg-amber-50 w-[700px] rounded-3xl pl-[10px] mt-[20px] h-[50px]' type="text" />
            <input placeholder='Ваш e-mail ' className='bg-amber-50 w-[700px] rounded-3xl pl-[10px] mt-[20px] h-[50px]' type="text" />
            <button className='bg-amber-50 text-[#43A548] h-[50px] w-[120px] rounded-3xl mt-[30px] cursor-pointer'>Отправить</button>
          </div>
        </div>
      </div>
      <div className='mt-[150px] pr-[5%] pl-[5%]'>
        <h1 className='text-4xl'>Ответы на вопросы</h1>
        <div className='bg-[#FFFFFF] rounded-3xl h-[50px] p-[8px] mt-[30px]'>
          <h1 className='text-2xl'>С чего начать работу с 1С-Товары?</h1>
        </div>
        <div className='bg-[#FFFFFF] rounded-3xl h-[200px] p-[20px] mt-[30px]'>
          <h1 className='text-2xl'>Как подключить 1С-Ритейл Чекер* и 1С-Товары?</h1>
          <p className='w-[600px]'>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».
            Каждую неделю вам на почту будет приходить письмо с рекомендациями:
            какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;
            какие товары у вас в избытке, а какие следует отнести к неликвидам;
            какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</p>
        </div>
        <div className='bg-[#FFFFFF] rounded-3xl h-[50px] p-[8px] mt-[30px]'>
          <h1 className='text-2xl'>Средний чек, о чем нам может рассказать?</h1>
        </div>
        <div className='bg-[#FFFFFF] rounded-3xl h-[50px] p-[8px] mt-[30px]'>
          <h1 className='text-2xl'>Сценарии автозаказа сервиса 1С-Товары</h1>
        </div>
        <div className='bg-[#FFFFFF] rounded-3xl h-[50px] p-[8px] mt-[30px]'>
          <h1 className='text-2xl'>Как подключить 1С-Ритейл Чекер* и 1С-Товары?</h1>
        </div>
        <div className='bg-[#FFFFFF] rounded-3xl h-[50px] p-[8px] mt-[30px]'>
          <h1 className='text-2xl'>Методы и формулы расчета торговой наценки</h1>
        </div>
      </div>
      <div className='flex justify-center mt-[200px] mb-[200px]'>
        <img src={main} alt="" />
      </div>
      <div className='bg-[#2C2B35] pl-[50px]  pr-[50px]'>
      <div className='pt-[20px]'>
        <img src={logo} alt="" />
        <h1 className='text-white mt-[20px] text-2xl'>+7(495)-111-00-10</h1>
        <h1 className='text-white mt-[20px]'>Для активации перейдите на portal.1c.ru или обратитесь к Вашему партнеру 1С.</h1>
        <h1 className='text-white mt-[20px]'>Инструкция по установке сервиса</h1>
      </div>
      </div>
    </div>
  )
}

export default Azizbek