const dataTable = $('#rating_table').DataTable({
  data: dataSet,
  columns: [
    { title: 'Name' },
    { title: 'Position' },
    { title: 'Office' },
    { title: 'Extn.' },
    { title: 'Start date' },
    { title: 'Salary' }
  ]
});