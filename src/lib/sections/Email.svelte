<script>
import { browser } from '$app/env';

import Icon from 'svelte-awesome';
import envelope from 'svelte-awesome/icons/envelope-o';

let email = "neil-at-lumphammer.com";

if (browser) {
	email = email.replace("-at-", "@");
}

</script>

<section class="interactive">
  <Icon class="backdrop-icon" data={envelope} scale={3} />
	<h2>neil at lumphammer dot com</h2>
	<a class="linkifier" href={`mailto: ${email}`} target="_new">{email}</a>
  <p>Email me!</p>
</section>
