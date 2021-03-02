function createClientBlock() {
    return `
<div class="row m-auto">
<h4 class="text-center mb-4">Musteri Listesi</h4>
${createtableHeader()}
</div>
`
}

function createtableHeader() {
    return `
    <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    ${createTableData()}
  </table>`
}

function createTableData() {
    return `
    <tbody>
        <tr>
            <th scope="row"></th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" class="btn btn-danger">See Details</button></td>
        </tr>
    </tbody>`
}