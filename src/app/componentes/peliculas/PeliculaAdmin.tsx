export const PeliculaAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered border border-primary">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Codigo</th>
                <th style={{ width: "50%" }}>Marca</th>
                <th style={{ width: "15%" }} className="text-center">
                  Talla
                </th>
                <th style={{ width: "15%" }}>Color</th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>gef</td>
                <td className="text-center">XS</td>
                <td>Blanco</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#6aef02" }}
                  ></i>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#f30404" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Koaj</td>
                <td className="text-center">M</td>
                <td>Negro</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#6aef02" }}
                  ></i>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#f30404" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Gato</td>
                <td className="text-center">XL</td>
                <td>Rojo</td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#6aef02" }}
                  ></i>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#f30404" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
