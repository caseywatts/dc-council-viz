<script>
  export let councilmember = {};
  export let vizConfig = {};

  let backgroundColorForStance = (vizConfig, stance) => {
    return vizConfig.stances[stance];
  };

  $: borderColor = "border-slate-500";
  $: backgroundColor = backgroundColorForStance(vizConfig, councilmember.stance);
</script>

<div class="rounded-lg p-3 aspect-square flex flex-col items-center justify-between text-center {backgroundColor} border-2 {borderColor} drop-shadow-lg">
  <div class="text-sm text-slate-500">{councilmember.position}</div>
  <div class="text-md font-medium">{councilmember.name}</div>
  <div class="text-xs text-slate-500">{councilmember.stance}</div>
</div>
