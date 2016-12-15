using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace Montescc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (!string.IsNullOrWhiteSpace(User.Identity.Name))
                return RedirectToAction("Mcursos", "Mconfigsite");
            else
                return View();
        }

        [HttpPost]
        public ActionResult CorreoContactanos(string correoVisita, string contenidoCorreo)
        {
            if (!string.IsNullOrEmpty(correoVisita) && !string.IsNullOrWhiteSpace(contenidoCorreo))
            {
                bool exito = SendMail(correoVisita, contenidoCorreo);
                return Json(new { Exito = exito }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { Exito = false }, JsonRequestBehavior.AllowGet);
        }

        private bool SendMail(string correoVisitante, string mensajeContacto)
        {
            try
            {
                var message = new MailMessage();
                var client = new SmtpClient();

                client.UseDefaultCredentials = false;
                ///Para:
                message = new MailMessage("josue@montes.cc", "josue@montes.cc") //username as to email address
                {
                    Subject = "Visitante del Sitio montes.cc escribió"
                };

                message.CC.Add("fenix@montes.cc");

                string Body = "<b>Correo recibido de parte de:</b>" + " " + ""
                    + "<br>" +
                    correoVisitante + "<br><br>"
                    + "<b>Escribió lo siguiente:</b><br>" + mensajeContacto;
                AlternateView htmlView = AlternateView.CreateAlternateViewFromString(Body, null, "text/html");

                message.AlternateViews.Add(htmlView);
                SmtpClient smtp = new SmtpClient();
                smtp.DeliveryMethod = SmtpDeliveryMethod.PickupDirectoryFromIis;
                message.IsBodyHtml = true;

                client.Credentials = new System.Net.NetworkCredential("josue@montes.cc", "fjmn11fbp");

                client.EnableSsl = true;

                client.Host = "smtp.gmail.com";

                client.Port = 587;
                client.Send(message);
                return true;
            }
            catch (Exception mensaje) { return false; }
        }
    }
}
