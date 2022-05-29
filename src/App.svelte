<script>
  import CouncilmemberCell from "./lib/CouncilmemberCell.svelte";
  import { data } from "./lib/votingData.js";
  import DCBackground from "./assets/DC Wards Background.png";
  // data.forEach((point) => {
  //   console.log(point);
  // });
  function councilmemberForWard(wardNumber) {
    return data.filter((councilmember) => {
      return councilmember.position == `Ward ${wardNumber}`;
    })[0];
  }
  const atLargeCouncilmembers = data.filter((councilmember) => {
    return councilmember.position == "At Large";
  });
  const chairperson = data.filter((councilmember) => {
    return councilmember.position == "Chairperson";
  })[0];
  console.log(councilmemberForWard(4));
</script>

<div class="m-4 border-2 border-slate-300 space-y-1" style="width:700px;">
  <div class="grid gap-4 grid-cols-4 grid-rows-1 p-2">
    {#each atLargeCouncilmembers as councilmember}
      <CouncilmemberCell {councilmember} />
    {/each}
    <div />
  </div>

  <div class="grid gap-4 grid-cols-4 grid-rows-4 p-2" style="background-image: url('{DCBackground}'); background-size: contain; background-repeat: no-repeat; background-position: center center;">
    <div />
    <CouncilmemberCell councilmember={councilmemberForWard(4)} />
    <div />
    <CouncilmemberCell councilmember={chairperson} />
    <CouncilmemberCell councilmember={councilmemberForWard(3)} />
    <CouncilmemberCell councilmember={councilmemberForWard(1)} />
    <CouncilmemberCell councilmember={councilmemberForWard(5)} />
    <div />
    <div />
    <CouncilmemberCell councilmember={councilmemberForWard(2)} />
    <CouncilmemberCell councilmember={councilmemberForWard(6)} />
    <CouncilmemberCell councilmember={councilmemberForWard(7)} />
    <div />
    <div />
    <CouncilmemberCell councilmember={councilmemberForWard(8)} />
    <div />
  </div>
</div>
