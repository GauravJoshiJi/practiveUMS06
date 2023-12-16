$("#add_user").submit(function (e) {
  alert("Data successfully inserted");
});

$("#update_user").submit(function (e) {
  e.preventDefault();

  var unindexed_array = $(this).serializeArray();

  var data = {};
  $.map(unindexed_array, function (n) {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function () {
    alert(`Data Successfully updated`);
  });
});

if (window.location.pathname == "/") {
  $ondelete = $("table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you want to delete ?")) {
      $.ajax(request).done(function () {
        alert("Data deleted successfully!");
        location.reload();
      });
    }
  });
}
