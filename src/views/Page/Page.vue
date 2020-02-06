<template>
  <div>
    PAGE
    <Test />

  </div>
</template>



<script>
// import TestComponent from "../../components/Component/TestComponent.vue";
// import Test from '../../components/test/Test.vue';

export default {
  name: "Test",
    data() {
      return {

        stackedBarData: {
          labels: ['Quantity', 'Leads', 'Sold', 'Restocking', 'Misc'],
            datasets: [
                {
                label: 'Dataset 1',
                data: [65000, 29123, 35213, 51213, 16932],
                },
                {
                label: 'Dataset 2',
                data: [32432, 21312, 56456, 21312, 34234],
                },
                {
                label: 'Dataset 3',
                data: [12312, 23232, 34232, 12312, 34234],
                },
            ],
            },

        stackedBarOptions: {
                title: 'Stacked bar (discrete)',
                axes: {
                    left: {
                    primary: true,
                    stacked: true,
                    },
                    bottom: {
                    scaleType: 'labels',
                    secondary: true,
                    },
                },
                height: '400px',},
        };
    },

    template:
      '<ccv-stacked-bar-chart :data="stackedBarData" :options="stackedBarOptions"></ccv-bar-chart>',
}

</script>
