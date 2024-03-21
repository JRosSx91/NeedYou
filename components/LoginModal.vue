<template>
  <UCard>
    <div class="space-y-4">
      <UFormGroup label="Email" name="email">
        <UInput type="email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput type="password" />
      </UFormGroup>

      <UButton label="Log In" color="gray" block />

      <UDivider label="OR" />
      <CommonGoogleBtn />
    </div>
  </UCard>
</template>
