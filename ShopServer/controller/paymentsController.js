const { response } = require("./helpers/dataResponse");

const merchantId = '508029';
const accountId = '512321';
const apiKey = '4Vj8eK4rloUd272L48hsrarnUA';
const currency = 'COP';
const test = '1';
const responseUrl = 'http://localhost:4200/women';
const confirmationUrl = 'http://localhost:4200';


const getForm = async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
};

const pay = async (req, res) => {
  const { referenceCode, description, amount, buyerEmail } = req.body;

  const signatureRaw = `${apiKey}~${merchantId}~${referenceCode}~${amount}~${currency}`;
  const signature = crypto.createHash("md5").update(signatureRaw).digest("hex");

  const formHtml = `
    <html>
      <body onload="document.forms[0].submit()">
         <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
          <input name="merchantId"      type="hidden"  value="508029"   >
          <input name="accountId"       type="hidden"  value="512321" >
          <input name="description"     type="hidden"  value="Test PAYU"  >
          <input name="referenceCode"   type="hidden"  value="TestPayU" >
          <input name="amount"          type="hidden"  value="20000"   >
          <input name="tax"             type="hidden"  value="3193"  >
          <input name="taxReturnBase"   type="hidden"  value="16806" >
          <input name="currency"        type="hidden"  value="COP" >
          <input name="signature"       type="hidden"  value="7ee7cf808ce6a39b17481c54f2c57acc"  >
          <input name="test"            type="hidden"  value="0" >
          <input name="buyerEmail"      type="hidden"  value="test@test.com" >
          <input name="responseUrl"     type="hidden"  value="http://www.test.com/response" >
          <input name="confirmationUrl" type="hidden"  value="http://www.test.com/confirmation" >
          <input name="Submit"          type="submit"  value="Enviar" >
        </form>
      </body>
    </html>
  `;

  res.send(formHtml);
};

// Recepción de respuesta desde PayU (navegador)
const resp = async (req, res) => {
  res.send("Gracias por tu compra. Revisa tu correo para más detalles.");
};

// Confirmación desde PayU (servidor a servidor)
const confirmation = async (req, res) => {
  console.log("Confirmación recibida de PayU:", req.body);
  res.sendStatus(200);
};

module.exports = {
  getForm,
  pay,
  resp,
  confirmation,
};
