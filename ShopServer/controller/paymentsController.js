const { response } = require("./helpers/dataResponse");
const crypto = require("crypto");

const merchantId = "508029";
const accountId = "512321";
const apiKey = "4Vj8eK4rloUd272L48hsrarnUA";
const currency = "COP";
const test = "1";
const responseUrl = "http://localhost:4200/women";
const confirmationUrl = "http://localhost:4200";

// 🔐 Campos requeridos para generar firma
const referenceCode = "pedido123";
const amount = 20000;

// 🧮 Impuestos (simulados para pruebas)
const tax = 3193;
const taxReturnBase = amount - tax;

const getForm = async (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
};

const pay = async (req, res) => {
  try {
    const { amount, email } = req.body;
    console.log(req.body);

    if (!amount || !email) {
      return res.status(400).send("Faltan datos");
    }

    const tax = 0;
    const taxReturnBase = amount - tax;

    const paymentsReference = generatePaymentReference();
    console.log(paymentsReference);

    const signatureRaw = `${apiKey}~${merchantId}~${paymentsReference}~${amount}~${currency}`;
    const signature = crypto.createHash("md5").update(signatureRaw).digest("hex");
    console.log(signature);

    const formHtml = `
      <html>
        <body>
           <form id="payuForm" method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
            <input name="merchantId"      type="hidden"  value="${merchantId}"   >
            <input name="accountId"       type="hidden"  value="${accountId}" >
            <input name="description"     type="hidden"  value="Pago en tienda Red Vibes"  >
            <input name="referenceCode"   type="hidden"  value="${paymentsReference}" >
            <input name="amount"          type="hidden"  value="${amount}"   >
            <input name="tax"             type="hidden"  value="${tax}"  >
            <input name="taxReturnBase"   type="hidden"  value="${taxReturnBase}" >
            <input name="currency"        type="hidden"  value="COP" >
            <input name="signature"       type="hidden"  value="${signature}"  >
            <input name="test"            type="hidden"  value="1" >
            <input name="buyerEmail"      type="hidden"  value="${email}" >
            <input name="responseUrl"     type="hidden"  value="http://localhost:4200/shop/men" >
            <input name="confirmationUrl" type="hidden"  value="http://localhost:4200/shop/men" >
            input name="Submit"          type="submit"  value="Send" >
          </form>

          <script>
            document.getElementById('payuForm').submit();
            console.log('Enviado');
          </script>
        </body>
      </html>
    `;

    response(res, { payload: formHtml });
  } catch (err) {
    console.error("❌ Error generando WebCheckout:", err);
    res.status(500).send("Error generando WebCheckout");
  }
};

// Recepción de respuesta desde PayU (navegador)
const responseurl = async (req, res) => {
  res.send("Gracias por tu compra. Revisa tu correo para más detalles.");
};

// Confirmación desde PayU (servidor a servidor)
const confirmation = async (req, res) => {
  console.log("Confirmación recibida de PayU:", req.body);
  res.sendStatus(200);
};

function generatePaymentReference() {
  const now = new Date().toISOString();
  const hash = crypto.createHash("md5").update(now).digest("hex");
  return hash.slice(0, 8).toUpperCase();
}

module.exports = {
  getForm,
  pay,
  responseurl,
  confirmation,
};
