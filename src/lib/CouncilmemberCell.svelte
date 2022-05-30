<script>
  export let councilmember = {};

  const backgroundColorForStance = (stance) => {
    if (stance == "vocal supporter") {
      return "bg-blue-200";
    } else {
      return "bg-purple-200";
    }
  };

  $: backgroundColor = backgroundColorForStance(councilmember.stance);
</script>

<div class="rounded-lg p-3 aspect-square flex flex-col items-center justify-between text-center {backgroundColor}">
  <div class="text-sm text-slate-500">{councilmember.position}</div>
  <div class="text-md font-medium">{councilmember.name}</div>
  <div class="text-xs text-slate-500">{councilmember.stance}</div>
</div>
