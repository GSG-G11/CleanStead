const accepetBook = (id:number) => (
  `<!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    img {
        width:200px;
        margin:10px auto;
    }
    p {
        font-size: 20px;
    }
    </style>
    </head>
    <body>
      <img src="https://a.top4top.io/p_233818m2j1.png" alt="logo" />
      <p>تم قبول حجزك برقم ${id}</p>
      <p>شكرا لثقتك بنا للقيام بتقديم خدمات التنظيف  لك</p>
      <h3>مع تحياتنا</h3>
    </body>
    </html>`
);

export default accepetBook;
