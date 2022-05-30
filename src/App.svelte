<script>
  import CouncilmemberCell from "./lib/CouncilmemberCell.svelte";
  import { exampleData } from "./lib/votingData.js";
  import DCBackground from "./assets/DC Wards Background.png";
  import prettier from "prettier/standalone";
  import babel from "prettier/parser-babel";
  import html2canvas from "html2canvas";
  import canvas2image from "canvas2image-2";

  // initialize to my data
  let dataJSON = JSON.stringify(exampleData);
  dataJSON = prettier.format(dataJSON, { parser: "json-stringify", plugins: [babel] });
  let data = JSON.parse(dataJSON);
  $: data = JSON.parse(dataJSON);

  // helper function to grab councilmember records by ward
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

  function screenshotIt() {
    html2canvas(document.querySelector("#visualization-output")).then((canvas) => {
      document.querySelector("#visualization-output-canvas").appendChild(canvas);
      canvas2image.saveAsImage(canvas);
      document.querySelector("#visualization-output-canvas").innerHTML = "";
    });
  }
</script>

<div class="flex items-start">
  <div class="m-4">
    <label class="block mb-3 text-xl" for="input-json">Input Data for Visualization</label>
    <textarea class="border" id="input-json" cols="60" rows="70" bind:value={dataJSON} />
  </div>

  <div>
    <div class="text-right">
      <button class="bg-slate-200 m-2 p-2 rounded-lg border border-slate-900 hover:bg-slate-300 hover:border-slate-500" on:click={screenshotIt}>Download Image</button>
    </div>
    <div id="visualization-output" class="m-4 border-2 border-slate-300 space-y-1" style="width:600px;">
      <div class="grid gap-4 grid-cols-4 grid-rows-4 p-2" style="background-image: url('{DCBackground}'); background-size: contain; background-repeat: no-repeat; background-position: bottom center;">
        {#each atLargeCouncilmembers as councilmember}
          <CouncilmemberCell {councilmember} />
        {/each}

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
      </div>
    </div>
  </div>
</div>
<div id="visualization-output-canvas" />
