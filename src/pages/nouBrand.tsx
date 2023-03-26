import Header from '../Components/Header';
import React, { useState, useEffect } from 'react';

const nouBrand = () => {
  const [max, setMax]: any = useState(0);
  useEffect(() => {
    setMax(window?.visualViewport?.width);
  }, []);

  const openNouSite = () => {
    window.open('https://noubrand.store/', '_blank');
  };
  return (
    <div className="nouBrand">
      <div
        style={{
          zIndex: '10',
          background: 'white',
          top: '0',
          width: '100vw',
          position: 'fixed',
        }}
      >
        <Header />
      </div>
      <div className="headerContainer">
        <div className="logoTitle"> NOU</div>
        <div className="infoContainer">
          <div onClick={openNouSite} className="store">
            noubrand.store
          </div>
          <div className="infoWrapper">
            <div className="infoItem">
              Клиент
              <span>
                Бренд одежды <br />
                NOU
              </span>
            </div>
            <div className="infoItem">
              Услуга<span>Сайт</span>
            </div>
            <div className="infoItem">
              Год <span>2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainLogo">
        <img src="/images/NOULogo.png" alt="" />
      </div>
      <div className="aboutProject">
        <div className="text1"> о проекте</div>
        <div className="text2">
          <span>
            Полный брендинг под ключ <br />
          </span>
          нового российского бренда одежды
        </div>
        <div className="text3">
          Весьма нетипичный для нас проект, поскольку
          <br /> уже <span className="years">8 лет</span> мы занимаемся
          исключительно
          <br /> сложной разработкой, но тем интереснее было
          <br /> посмотреть,
          <span>умеем ли мы еще в маркетинг?</span>
        </div>
      </div>
      <div className="logoSecond">
        <img src="/images/NOULogo2.png" alt="" />
      </div>
      <div className="beginingContainer">
        <div className="title">
          Начало
          <div className="part"> 01 /</div>
        </div>
        <div className="beginingContent">
          <div>
            У клиента из исходников было только
            <br /> небольшое производство и зарубежные
            <br /> поставки. Плюс небольшое понимание
            <br /> концепта: ценовой уровень, качественный
            {max <= 768 && <br />} и{max > 768 && <br />} немного в понимание
            аудитории.
          </div>
          <div className="secondText">
            Все наши разговоры про то, что мы не
            <br /> маркетологи, игнорировались по
            {max <= 768 && max > 638 && <br />} причине,{max > 768 && <br />}
            {max <= 638 && <br />}
            что когда-то - 10 лет назад их {max <= 768 && max > 638 && <br />}
            хорошим {max <= 638 && <br />}
            {max > 768 && <br />} друзьям мы классно&nbsp;
            {max <= 768 && max > 638 && <br />}
            <span>увеличили продажи.</span>
            <div className="secondTextChild">
              Ну да… тогда мы этим и<br />
              занимались.
            </div>
          </div>
        </div>
      </div>
      <div className="namingContainer">
        <div className="title">
          Нейминг
          <div className="part"> 02 /</div>
          {max > 560 && (
            <div className="img">
              <img src="/images/zara.png" alt="" />
            </div>
          )}
        </div>
        <div className="beginingContent1">
          <span>Первоначально</span> нужно было в брендинг{max > 560 && <br />}и
          {max <= 560 && <br />} позиционирование… Исходные{max > 560 && <br />}
          данные{max <= 560 && <br />} были про то, что бренд новый,
          {max > 560 && <br />} модели{max <= 560 && <br />} современные и в
          продаже
          {max > 560 && <br />} появляются{max <= 560 && <br />} чутка раньше
          схожих из
          {max > 560 && <br />} ZARA, например.
        </div>

        {max <= 560 && (
          <div className="imgPhone">
            <img src="/images/namingImgPhone.png" alt="" />
          </div>
        )}
        <div className="beginingContent2">
          {max > 560 ? (
            <div className="text1">
              Прошлогодних трендов, даже если{max <= 768 && max > 560 && <br />}
              они{max > 768 && <br />} делают норм кассу у конкурентов,
              {max <= 768 && max > 560 && <br />} бренд{max > 768 && <br />}не
              придерживается. В общем,{max <= 768 && max > 560 && <br />} все
              новое,{max > 768 && <br />} все только из печи.
            </div>
          ) : (
            <div className="text1">
              Прошлогодних трендов, даже если они
              <br /> делают норм кассу у конкурентов, бренд не
              <br /> придерживается. В общем, все новое, все
              <br />
              только из печи.
            </div>
          )}

          {max > 560 ? (
            <div className="text2">
              <span>Второй частью</span> позиционирования на
              {max <= 768 && max > 560 && <br />} рынке
              {max > 768 && <br />} была эмоциональность. Одежда&nbsp;
              {max <= 768 && max > 560 && <br />}
              <span className="colorText">яркая</span>,{max > 768 && <br />}
              <span className="colorText">выделяющаяся</span>, но без пошлости и
              {max <= 768 && max > 560 && <br />}
              кринжа.{max > 768 && <br />} Некая база, но не скучная и не с
              {max <= 768 && max > 560 && <br />} рынка. В{max > 768 && <br />}
              общем, какие-то такие данные…
            </div>
          ) : (
            <div className="text2">
              <span>Второй частью</span> позиционирования на рынке
              <br /> была эмоциональность. Одежда&nbsp;
              <span className="colorText">яркая</span>,<br />
              <span className="colorText">выделяющаяся</span>, но без пошлости и
              кринжа.
              <br /> Некая база, но не скучная и не с рынка. В<br /> общем,
              какие-то такие данные…
            </div>
          )}
          <div className="img2">
            <img src="/images/namingImg2.png" alt="" />
          </div>
        </div>
        <div className="beginingContent3">
          <div className="text1">
            В итоге, было выдумано и<br /> протестировано следующее
            <br /> исходное состояние:
          </div>
          <div>
            {max > 560 ? (
              <img src="/images/greenArrow.svg" alt="" />
            ) : (
              <img src="/images/greenArrowBottom.svg" alt="" />
            )}
          </div>
          <div className="containerLogo">
            <div className="nameContainer">
              <span className="name">нейм - </span>
              <span className="nouTextLogo">
                NOU<span className="article">,</span>
              </span>
            </div>
            <div className="textRemark">
              что в переводе с каталинского
              <br /> означает
              <span className="colorText"> новый.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="img3">
        <img src="/images/mapBook.png" alt="" />
      </div>
      <div className="namingContainer2">
        <div className="text1"> Почему каталанский? </div> <br />
        <div className="text2">
          Да потому что этот диалект испанского, на
          <br /> котором говорят как раз законодатели
          <br /> европейской моды: Каталония и частично
          <br /> Франция и Италия. Плюс ко всему, носители
          <br /> этого языка как раз весьма эмоциональные
          <br /> люди.
        </div>
      </div>
      {max > 560 && (
        <div className="namingContainer3">
          <div className="img4">
            <img src="/images/newEmotionsImage.png" alt="" />
            <div className="textContainer">
              <div>
                НОВЫЙ
                <br /> СТИЛЬ
              </div>
              <div>
                НОВЫЕ
                <br /> ЭМОЦИИ
              </div>
            </div>
            <div className="defis">
              <img src="/images/bigDefis.svg" alt="" />
            </div>
          </div>
          <div className="text">
            Определение сложилось сразу же и<br /> даже дополнительных вариантов
            не
            <br /> потребовал ни у Заказчика, ни у<br /> контрольной группы.
          </div>
        </div>
      )}
      {max <= 560 && (
        <div className="img4">
          <img src="/images/newEmotionsImage.png" alt="" />
          <div className="containerText">
            <div className="text1">
              <span>
                НОВЫЙ <br /> СТИЛЬ
              </span>
              <span className="tire"> — </span>
              <span>
                НОВЫЕ <br /> ЭМОЦИИ
              </span>
            </div>
            <div className="text2">
              Определение сложилось сразу же <br /> и даже дополнительных
              вариантов не <br /> потребовал ни у Заказчика, ни у <br />
              контрольной группы.
            </div>
          </div>
        </div>
      )}
      <div className="namingContainer4">
        <div className="title">
          Брендинг
          <div className="part"> 03 /</div>
        </div>
        <div className="text1">
          Разработка лого и фирменных цветов была
          <br /> реализована исходя из позиционирования {max <= 560 && <br />}
          бренда в{max > 560 && <br />} ценовом сегменте чуть ниже
          {max <= 560 && <br />}среднего, когда{max > 560 && <br />} хочется уже
          и в строгость{max <= 560 && <br />} и дороговизну, но до
          {max > 560 && <br />} уровня крупных игроков{max <= 560 && <br />} еще
          далеко.
        </div>
        <div className="logo">
          <img src="/images/NOUBrand.jpg" alt="" />
        </div>
        <div className="containerTagsAndColors">
          <div className="containerColorsNames">
            <div className="namesContainer">
              <span className="didot">Didot</span>
              <br />
              {max > 1024 && <br />}

              <span className="raleway">Raleway</span>
            </div>
            <div className="textColors">
              Фирменные цвета также были
              <br /> разработаны исходя из
              {max > 768 && <br />} строгости и {max <= 768 && <br />}
              аккуратности
            </div>
          </div>
          <div className="containerColors">
            <div
              style={{
                color: 'black',
                border: '1px solid #D9D9D9',
              }}
              className="colorItem"
            >
              <img src="/images/color1.png" alt="" />
              <span> FFFFFF</span>
            </div>
            <div
              style={{
                color: 'black',
              }}
              className="colorItem"
            >
              <img src="/images/color2.png" alt="" />
              <span> 7E7B77 </span>
            </div>
            <div
              style={{
                color: 'white',
              }}
              className="colorItem"
            >
              <img src="/images/color3.png" alt="" />
              <span> 010101</span>
            </div>
          </div>
        </div>
        <div className="containerTags">
          <div className="allTags">
            <div className="firstTags">
              <img className="firstTag" src="/images/tag1.png" alt="" />
              <img className="secondTag" src="/images/tag2.png" alt="" />
            </div>
            <div className="secondTags">
              <img className="thirdTag" src="/images/tag3.png" alt="" />
              <img className="fourthTag" src="/images/tag4.png" alt="" />
            </div>
          </div>
          <div className="tagsText">
            Затем был разработан дизайн
            <br /> бирок и упаковки
          </div>
        </div>
      </div>
      <div className="namingContainer5">
        <div className="title">
          Сайт
          <div className="part"> 04 /</div>
        </div>
        <div className="textSite">
          Далее последовала
          <br /> разработка сайта.
        </div>
        <div className="img5">
          {max > 768 ? (
            <img src="/images/NOULogo3.png" alt="" />
          ) : (
            <img src="/images/NOULogo3_768.png" alt="" />
          )}
        </div>
        <div className="task">
          <div className="taskTitle"> Задача:</div>
          <div className="taskContent">
            органично собрать как промо-сайт, так и e<br />
            -commerce. Поскольку бренд еще не имеет
            <br /> истории, задача была органично и качественно
            <br /> заполнить, по сути, пустые экраны.
          </div>
        </div>
        <div className="catalogPage">
          <div className="catalogPageTitle"> Cтраница каталога </div>
          <div className="catalogPageDescr">
            Затем был разработан максимально простой и<br /> удобный каталог
            товаров
          </div>
        </div>
      </div>
      <div className="imagesContainer">
        <div className="catalog1">
          <div className="catalogFirst">
            {max > 768 ? (
              <img src="/images/catalog1.png" alt="" />
            ) : (
              <img src="/images/catalog1_768.png" alt="" />
            )}
          </div>
          <div className="catalogSecond">
            <img src="/images/catalog2.png" alt="" />
          </div>
        </div>
        <div className="catalog2">
          <div className="productCardTitle">Карточка товара </div>
          <div className="productCard">
            <img src="/images/productCard.png" alt="" />
            <img
              className="productCard2"
              src="/images/productCard2.png"
              alt=""
            />
          </div>

          <div className="productCard3">
            <img src="/images/catalog3.png" alt="" />
            {max > 560 ? (
              <>
                <img
                  className="orderImage"
                  src="/images/catalog3Order.png"
                  alt=""
                />
                <img
                  className="orderImage1440"
                  src="/images/orderMobile.png"
                  alt=""
                />
              </>
            ) : (
              <img
                className="orderImage"
                src="/images/orderMobile.png"
                alt=""
              />
            )}
          </div>
        </div>
        <div className="catalog3">
          <div className="basketAndPayment">Корзина и оплата</div>
          <div className="basketImage">
            <img src="/images/basket.png" alt="" />
          </div>
        </div>
      </div>
      <div className="socialMedia">
        <div className="socialMediaText">
          Кроме того, на сайте необходимо было{max <= 560 && <br />}
          предусмотреть&nbsp;{max > 560 && <br />} раздел с готовыми образами,
          {max <= 560 && <br />} подобранными стилистами
          {max > 560 && <br />} для конкретных{max <= 560 && <br />} дел и
          мероприятий
        </div>
        <div className="socialMediaImg">
          <img src="/images/socialMedia.png" alt="" />
        </div>
        <img
          className="socialMediaImg2"
          src="/images/socialMedia2.png"
          alt=""
        />
        <div className="socialMediaContainer">
          <div className="title">
            Социальные медиа
            <div className="part"> 05 /</div>
          </div>
          <div className="socialMediaText2">
            Сайты сайтами, а в 2023 основной канал взаимодействия
            {max > 560 && <br />} с ЦА — это эти ваши инстаграмы (запрещено в
            России). {max > 560 && <br />} Таким образом, мы развернули профили
            как там, так и в {max > 560 && <br />} Телеграме, в том числе и
            канал.
          </div>
          <div className="socialMediaContainerImages">
            <img
              className="socialMediaImg3"
              src="/images/socialMedia5.png"
              alt=""
            />
          </div>
          <div className="socialMediaText3">
            Ну и как оказалось… Это только начало…
          </div>
          <div className="socialMediaText4">
            <div>
              <span>NOU</span>&nbsp; для нас теперь не проект, а процесс!
              {max <= 560 && <br />} Работы продолжаются,{max > 560 && <br />}
              впереди много{max <= 560 && <br />} интересного.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nouBrand;
