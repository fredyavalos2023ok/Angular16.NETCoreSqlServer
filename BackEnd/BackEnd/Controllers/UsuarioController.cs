using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Domain.IServices;
using BackEnd.Domain.Models;
using BackEnd.DTO;
using BackEnd.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;
        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Usuario usuario)
        {
            try
            {
                var validateExistence = await _usuarioService.ValidateExistence(usuario);
                if (validateExistence)
                {
                    return BadRequest(new { message = "El usuario " + usuario.NombreUsuario + " ya existe!" });
                }
                usuario.Password = Encriptar.EncriptarPassword(usuario.Password);
                await _usuarioService.SaveUser(usuario);

                return Ok(new { message = "Usuario registrado con exito!" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // localhost:xxx/api/Usuario/CambiarPassword
        [Route("CambiarPassword")]
        [HttpPut]
        public async Task<IActionResult> CambiarPassword([FromBody] CambiarPasswordDTO cambiarPassword)
        {
            try
            {
                int idUsuario = 1;
                string passwordEncriptado = Encriptar.EncriptarPassword(cambiarPassword.passwordAnterior);
                var usuario = await _usuarioService.ValidatePassword(idUsuario, passwordEncriptado);
                if (usuario == null)
                {
                    return BadRequest(new { message = "La password es incrorrecta" });
                }else
                {
                    usuario.Password = Encriptar.EncriptarPassword(cambiarPassword.nuevaPassword);
                    await _usuarioService.UpdatePassword(usuario);
                    return Ok(new { message = "La password fue actualizada con exito!" });

                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
