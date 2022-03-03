using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class InventosController : ControllerBase
{
    private readonly ILogger<InventosController> _logger;
    private readonly IInventoService _inventoService;

    public InventosController(ILogger<InventosController> logger, IInventoService bookService)
    {
        _logger = logger;
        _inventoService = bookService;
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(InventoDTO))]
    public ActionResult<InventoDTO> Get()
    {
        return Ok(_inventoService.GetAll());
    }

    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(InventoDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<InventoDTO> Get(int Id)
    {
        InventoDTO result = _inventoService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }


    [HttpDelete("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(InventoDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<InventoDTO> Delete(int Id)
    {
        InventoDTO result = _inventoService.GetByID(Id);

        if (result == null)
            return NotFound();

        _inventoService.Delete(Id);

        return Ok(result);

    }



    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(InventoDTO))]
    public ActionResult<InventoDTO> Post([FromBody] BaseInventoDTO baseBook)
    {

        return Ok(_inventoService.Add(baseBook));
    }

    [HttpPut("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(InventoDTO))]
    public ActionResult<InventoDTO> Put([FromBody] BaseInventoDTO baseBook, int Id)
    {

        return Ok(_inventoService.Modify(baseBook, Id));
    }

}
