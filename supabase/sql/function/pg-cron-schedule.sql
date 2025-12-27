-- pg_cron_schedule
SELECT cron.schedule(
    'refresh-all-mvs-daily',
    '0 18 * * *',
    'SELECT refresh_all_mvs()'
);