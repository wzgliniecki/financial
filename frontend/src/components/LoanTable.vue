<template>
  <div class="loan-table">
    <DataTable :value="loans" responsive>
      <template #header>
        <h3>Loan Details</h3>
      </template>

      <Column field="loanAmount" header="Loan Amount" :body="currencyTemplate" />
      <Column field="interestRate" header="Interest Rate" />
      <Column field="termLength" header="Term Length (Years)" />
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useLoanStore } from '../stores/LoanStore';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default defineComponent({
  name: 'LoanTable',
  components: {
    DataTable,
    Column,
  },
  setup() {
    const loanStore = useLoanStore();
    const loans = computed(() => loanStore.getLoans);
    
    const currencyTemplate = (rowData: any) => {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData);
    };

    return { loans, currencyTemplate };
  },
});
</script>

<style scoped>
.loan-table {
  margin: 20px;
}
</style>
