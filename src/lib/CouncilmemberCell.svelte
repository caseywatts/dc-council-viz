<script>
  export let councilmember = {};
  let backgroundColor;
  if (councilmember.stance == "vocal supporter") {
    backgroundColor = "bg-blue-200";
  } else {
    backgroundColor = "bg-purple-200";
  }
</script>

<div class="rounded-lg p-3 aspect-square flex flex-col items-center justify-between text-center {backgroundColor}">
  <div class="text-slate-500">{councilmember.position}</div>
  <div class="text-lg font-medium">{councilmember.name}</div>
  <div class="text-sm text-slate-500">{councilmember.stance}</div>
</div>
