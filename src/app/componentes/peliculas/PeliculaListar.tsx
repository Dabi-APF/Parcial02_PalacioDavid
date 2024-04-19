export const PeliculaListar = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered border border-primary">
            <thead>
              <tr>
                <th style={{width: "10%"}}>Codigo</th>
                <th style={{width: "50%"}}>Marca</th>
                <th style={{width: "20%"}} className="text-center">Talla</th>
                <th style={{width: "20%"}}>Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>gef</td>
                <td className="text-center">XS</td>
                <td>Blanco</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Koaj</td>
                <td className="text-center">M</td>
                <td>Negro</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Gato</td>
                <td className="text-center">XL</td>
                <td>Rojo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
