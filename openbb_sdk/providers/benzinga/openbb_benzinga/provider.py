"""Benzinga provider module."""

# IMPORT STANDARD

# IMPORT THIRD-PARTY

# IMPORT INTERNAL
from openbb_provider.abstract.provider import Provider

from openbb_benzinga.global_news import BenzingaGlobalNewsFetcher
from openbb_benzinga.stock_news import BenzingaStockNewsFetcher

# mypy: disable-error-code="list-item"


benzinga_provider = Provider(
    name="benzinga",
    description="Provider for Benzinga.",
    required_credentials=["api_key"],
    fetcher_list=[BenzingaGlobalNewsFetcher, BenzingaStockNewsFetcher],
)
