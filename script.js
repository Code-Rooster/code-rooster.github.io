//$("#feelings-dropdown").empty();

const jsonFeelings = JSON.parse(`[ 
  { "feeling":"angry" }, 
  { "feeling":"frustrated" }, 
  { "feeling":"tired" }, 
  { "feeling":"confused" }, 
  { "feeling":"discombobulated" }, 
  { "feeling":"distraught" }, 
  { "feeling":"misunderstood" }, 
  { "feeling":"hurt" }]`);

$(document).ready(function()
{
  $.each(jsonFeelings, function (key, entry) {
    console.log(entry);
    $("#feelings-dropdown").append($('<option value="' + entry.feeling + '">' + entry.feeling + '</option>'));
  });
})
