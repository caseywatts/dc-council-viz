<script>
  import CouncilmemberCell from "./lib/CouncilmemberCell.svelte";
  import { exampleData } from "./lib/votingData.js";
  import DCBackground from "./assets/DC Wards Background.png";

  // initialize to my data
  let dataJSON = JSON.stringify(exampleData);
  let data = JSON.parse(dataJSON);
  $: data = JSON.parse(dataJSON);

  // helper function to grab people by their ward
  function councilmemberForWard(data, wardNumber) {
    return data.filter((councilmember) => {
      return councilmember.position == `Ward ${wardNumber}`;
    })[0];
  }

  // reactive statement assignments for each person
  $: atLargeCouncilmembers = data.filter((councilmember) => {
    return councilmember.position == "At Large";
  });
  $: chairperson = data.filter((councilmember) => {
    return councilmember.position == "Chairperson";
  })[0];
  $: councilmember_for_ward_1 = councilmemberForWard(data, 1);
  $: councilmember_for_ward_2 = councilmemberForWard(data, 2);
  $: councilmember_for_ward_3 = councilmemberForWard(data, 3);
  $: councilmember_for_ward_4 = councilmemberForWard(data, 4);
  $: councilmember_for_ward_5 = councilmemberForWard(data, 5);
  $: councilmember_for_ward_6 = councilmemberForWard(data, 6);
  $: councilmember_for_ward_7 = councilmemberForWard(data, 7);
  $: councilmember_for_ward_8 = councilmemberForWard(data, 8);
</script>

<div class="flex">
  <div>
    <label for="input-json" />
    <textarea class="border m-4" id="input-json" cols="30" rows="10" bind:value={dataJSON} />
  </div>

  <div class="m-4 border-2 border-slate-300 space-y-1" style="width:600px;">
    <div class="grid gap-4 grid-cols-4 grid-rows-1 p-2">
      {#each atLargeCouncilmembers as councilmember}
        <CouncilmemberCell {councilmember} />
      {/each}
      <div />
    </div>

    <div class="grid gap-4 grid-cols-4 grid-rows-4 p-2" style="background-image: url('{DCBackground}'); background-size: contain; background-repeat: no-repeat; background-position: center center;">
      <div />
      <CouncilmemberCell councilmember={councilmember_for_ward_4} />
      <div />
      <CouncilmemberCell councilmember={chairperson} />
      <CouncilmemberCell councilmember={councilmember_for_ward_3} />
      <CouncilmemberCell councilmember={councilmember_for_ward_1} />
      <CouncilmemberCell councilmember={councilmember_for_ward_5} />
      <div />
      <div />
      <CouncilmemberCell councilmember={councilmember_for_ward_2} />
      <CouncilmemberCell councilmember={councilmember_for_ward_6} />
      <CouncilmemberCell councilmember={councilmember_for_ward_7} />
      <div />
      <div />
      <CouncilmemberCell councilmember={councilmember_for_ward_8} />
      <div />
    </div>
  </div>
</div>
